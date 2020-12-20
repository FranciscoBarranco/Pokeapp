import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    display: 'none',
    backgroundColor: '#ef5350',
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  tabContainer: {
    height: 79,
    paddingBottom: 28,
    borderWidth: 0,
  },
  tabText: {
    fontFamily: 'Mulish-Regular',
    fontSize: 10,
    textAlign: 'center',
  },
  tab: {
    paddingLeft: 10,
  },
  share: { marginLeft: 4 },
});

export default styles;