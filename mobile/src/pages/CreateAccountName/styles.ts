import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F7",
    justifyContent: 'center'
  },

  goBackButton:{
    margin: 32,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1
  },
  
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 32,
    borderBottomColor: '#000',
    //borderBottomWidth: 1
  },

  titleText: {
    maxWidth: 235,
    color: "#32264D",
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 32,
    lineHeight: 42,
  },

  subTitleText: {
    maxWidth: 208,
    color: "#6A6180",
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 24,
    marginTop: 8
  },

  signInContainer: {
    padding: 32,
    paddingVertical: 56
  },

  signInText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    lineHeight: 34,
    color: '#32264D'
  },

  inputContainer: {
    justifyContent: 'space-between',
    marginVertical: 24
  },

  nameInput:{
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  lastNameInput:{
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },

  signInBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  },

  signInButton: {
    backgroundColor: '#DCDCE5',
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },

  signInButtonText: {
    fontFamily: 'Archivo_400Regular',
    color: '#9C98A6',
    fontSize: 16,
    lineHeight: 26
  },

  signInButtonEnabled: {
    backgroundColor: '#8257E5'
  },

  signInButtonTextEnabled: {
    color: '#fff'
  },
});

export default styles;