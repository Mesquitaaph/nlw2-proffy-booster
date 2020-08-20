import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'relative',
  },

  input: {
    flex: 1,
    backgroundColor: '#fff',
    height: 54,
    paddingLeft: 24,
    borderColor: '#E6E6F0',
    borderWidth: 1,
    paddingTop: 30,
    paddingBottom: 10,
  },

  placeholderText: {
    color: '#C1BCCC',
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 24,
    position: 'absolute',
    top: 25,
    left: 25
  },

  placeholderTextFocus: {
    color: '#C1BCCC',
    fontFamily: 'Poppins_400Regular',
    fontSize: 10,
    lineHeight: 20,
    position: 'absolute',
    top: 10,
    left: 24
  },

  leftBar: {
    backgroundColor: '#8257E5',
    width: 2,
    height: 40,
    position: 'absolute',
    left: 1,
    top: 7
  },

  iconButton: {
    position: 'absolute',
    right: 24,
    top: 18,
  }
});

export default styles;