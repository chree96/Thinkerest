/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  TouchableOpacity,
  View,
  ScrollView,
  Animated,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDimensions } from 'react-native-hooks';
import Modal from 'react-native-modal';
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
  ...props
}: CardProps) => {
  const scrollView = useRef<any>();
  const { height: screenHeight } = useDimensions().window;
  const [scroll] = useState(new Animated.Value(0));

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

  const close = () => {
    closeAction();
    if (scrollView.current) scrollView.current.scrollTo({ x: 0, y: 0 });
  };

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
      backdropTransitionOutTiming={0}
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onBackdropPress={close}
      onSwipeComplete={close}
      propagateSwipe={true}
      onBackButtonPress={close}
      onModalHide={onModalHide}
      {...props}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={[styles.content, contentContainerStyle]}>
        <View
          style={styles.header}
          testID={'closeDrawer'}
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
                style={[
                  styles.animatedView,
                  {
                    opacity: shadowOpacity,
                  },
                ]}>
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
    </Modal>
  );
};

export default SwipeableBottomDrawer;
