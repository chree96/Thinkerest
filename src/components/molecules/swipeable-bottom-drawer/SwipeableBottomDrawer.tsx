/* eslint-disable react-native/no-inline-styles */
import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import {
  TouchableOpacity,
  View,
  ScrollView,
  Animated,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
  Modal,
  PanResponder,
  Pressable,
  StyleSheet,
} from 'react-native';
import LinearGradient from '../../atoms/linear-gradient/LinearGradient';
import styles from './SwipeableBottomDrawer.styles';
import { colors } from '../../../styles';
import { CardProps } from './SwipeableBottomDrawer.types';

const SwipeableBottomDrawer = ({
  visible = false,
  children,
  headerStyle,
  contentStyle,
  closeAction,
  maxHeight,
  headerComponent,
  fixedBottomComponent,
  fixedBottomComponentStyle,
  renderFooter,
  contentContainerStyle,
  scrollToTop = false,
  scrollToEnd = false,
  withScroll = false,
  onModalHide,
  style,
  ...viewProps
}: CardProps) => {
  const scrollView = useRef<any>(null);
  const { height: screenHeight } = useWindowDimensions();
  const [scroll] = useState(new Animated.Value(0));
  const [isMounted, setIsMounted] = useState(visible);
  const translateY = useRef(new Animated.Value(screenHeight)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;
  const transitionId = useRef(0);
  const visibleRef = useRef(visible);
  const wasVisible = useRef(visible);
  visibleRef.current = visible;

  const shadowOpacity = scroll.interpolate({
    inputRange: [0, 20, 20],
    outputRange: [0, 1, 1],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    if (scrollToTop) {
      if (scrollView.current) scrollView.current.scrollTo({ x: 0, y: 0 });
    }
    if (scrollToEnd) {
      if (scrollView.current) scrollView.current.scrollToEnd();
    }
  }, [scrollToTop, scrollToEnd, scrollView]);

  const close = useCallback(() => {
    closeAction();
    if (scrollView.current) scrollView.current.scrollTo({ x: 0, y: 0 });
  }, [closeAction]);

  const animateIn = useCallback(() => {
    if (!visibleRef.current) return;

    transitionId.current += 1;
    translateY.setValue(screenHeight);
    backdropOpacity.setValue(0);
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 260,
        useNativeDriver: true,
      }),
      Animated.timing(backdropOpacity, {
        toValue: 0.5,
        duration: 220,
        useNativeDriver: true,
      }),
    ]).start();
  }, [backdropOpacity, screenHeight, translateY]);

  const animateOut = useCallback(() => {
    const currentTransition = ++transitionId.current;

    Animated.parallel([
      Animated.timing(translateY, {
        toValue: screenHeight,
        duration: 220,
        useNativeDriver: true,
      }),
      Animated.timing(backdropOpacity, {
        toValue: 0,
        duration: 180,
        useNativeDriver: true,
      }),
    ]).start(({ finished }) => {
      if (
        finished &&
        currentTransition === transitionId.current &&
        !visibleRef.current
      ) {
        setIsMounted(false);
        onModalHide?.();
      }
    });
  }, [backdropOpacity, onModalHide, screenHeight, translateY]);

  useEffect(() => {
    const wasVisibleBefore = wasVisible.current;
    wasVisible.current = visible;

    if (visible) {
      if (!isMounted) {
        setIsMounted(true);
      } else if (!wasVisibleBefore) {
        animateIn();
      }
    } else if (isMounted && wasVisibleBefore) {
      animateOut();
    }
  }, [animateIn, animateOut, isMounted, visible]);

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: (_, gestureState) =>
          gestureState.dy > 8 &&
          Math.abs(gestureState.dy) > Math.abs(gestureState.dx),
        onPanResponderMove: (_, gestureState) => {
          translateY.setValue(Math.max(0, gestureState.dy));
        },
        onPanResponderRelease: (_, gestureState) => {
          if (
            gestureState.dy > Math.min(120, screenHeight * 0.2) ||
            gestureState.vy > 0.9
          ) {
            close();
          } else {
            Animated.spring(translateY, {
              toValue: 0,
              useNativeDriver: true,
              damping: 24,
              stiffness: 220,
              mass: 0.8,
            }).start();
          }
        },
        onPanResponderTerminate: () => {
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
            damping: 24,
            stiffness: 220,
            mass: 0.8,
          }).start();
        },
      }),
    [close, screenHeight, translateY],
  );

  const DrawerContent = useCallback(() => {
    if (children) {
      return withScroll ? (
        <ScrollView
          ref={scrollView}
          nestedScrollEnabled
          directionalLockEnabled
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          contentContainerStyle={{
            paddingBottom: fixedBottomComponent ? 50 : 0,
            backgroundColor: colors.solidBlack,
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scroll } } }],
            { useNativeDriver: false },
          )}
          scrollEventThrottle={16}>
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.touchableSwipeFix, contentStyle]}>
            {children}
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <View
          style={{
            flexGrow: 1,
            minHeight: screenHeight * 0.6,
            backgroundColor: 'black',
          }}>
          {children}
        </View>
      );
    }
    return null;
  }, [
    children,
    contentStyle,
    fixedBottomComponent,
    screenHeight,
    scroll,
    withScroll,
  ]);

  return (
    <Modal
      transparent
      visible={isMounted}
      animationType="none"
      statusBarTranslucent
      onShow={animateIn}
      onRequestClose={close}>
      <View style={[styles.modal, localStyles.modalRoot]} pointerEvents="box-none">
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            localStyles.backdrop,
            { opacity: backdropOpacity },
          ]}
        />
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Close modal"
          onPress={close}
          style={StyleSheet.absoluteFill}
        />
        <Animated.View
          {...panResponder.panHandlers}
          style={[
            localStyles.sheetTranslation,
            { transform: [{ translateY }] },
          ]}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={[styles.content, contentContainerStyle, style]}
            {...viewProps}>
            <View
              style={styles.header}
              testID="closeDrawer"
              accessibilityLabel={Platform.select({ android: 'closeDrawer' })}>
              <View style={styles.handle} />
            </View>
            <View
              style={{
                maxHeight: maxHeight ? maxHeight * 0.9 : screenHeight * 0.8,
              }}>
              {headerComponent ? (
                <View style={headerStyle}>
                  <Animated.View
                    style={[styles.animatedView, { opacity: shadowOpacity }]}>
                    <LinearGradient
                      colors={['rgba(0, 0, 0, 0.15)', 'rgba(0, 0, 0, 0)']}>
                      <View style={styles.animatedViewContent} />
                    </LinearGradient>
                  </Animated.View>
                  {headerComponent}
                </View>
              ) : null}
              <DrawerContent />
              {fixedBottomComponent ? (
                <LinearGradient
                  pointerEvents="box-none"
                  style={[styles.fixedBottomComponent, fixedBottomComponentStyle]}
                  colors={[
                    'rgba(244, 243, 239, 0.1)',
                    'rgba(244, 243, 239, 0.8)',
                    colors.pampas,
                  ]}>
                  {fixedBottomComponent}
                </LinearGradient>
              ) : null}
              {renderFooter ? (
                <View style={styles.renderFooter}>{renderFooter}</View>
              ) : null}
            </View>
          </KeyboardAvoidingView>
        </Animated.View>
      </View>
    </Modal>
  );
};

const localStyles = StyleSheet.create({
  modalRoot: {
    flex: 1,
  },
  backdrop: {
    backgroundColor: 'black',
  },
  sheetTranslation: {
    width: '100%',
  },
});

export default SwipeableBottomDrawer;
