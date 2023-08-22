import { StyleSheet } from 'react-native';
import { colors } from '../../../styles';

const styles = StyleSheet.create({
  modal: {
    padding: 0,
    margin: 0,
    justifyContent: 'flex-end',
  },
  header: {
    width: '100%',
    height: 20,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: colors.alto,
    borderRadius: 2,
    marginTop: 10,
  },
  headerContent: {
    width: '100%',
    height: 40,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    padding: 0,
    zIndex: 10,
  },
  closeButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  touchableSwipeFix: {
    flexGrow: 1,
  },
  animatedView: {
    position: 'absolute',
    height: 20,
    left: 0,
    right: 0,
    bottom: -19,
    overflow: 'visible',
  },
  animatedViewContent: {
    height: 20,
    borderTopWidth: 1,
    borderTopColor: colors.alto,
    zIndex: 30,
  },
  fixedBottomComponent: {
    zIndex: 20,
    position: 'absolute',
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    bottom: 0,
    width: '100%',
  },
  renderFooter: {
    marginLeft: 16,
    marginRight: 16,
  },
});

export default styles;
