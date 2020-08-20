import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F7",
    justifyContent: 'center'
  },

  content: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoImg: {
    width: 160,
    height: 40,
    resizeMode: 'contain',
    // borderColor: "#000",
    // borderWidth: 2
  },

  logoText: {
    maxWidth: 110,
    color: "#D4C2FF",
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 16,
    marginTop: 8
  },

  loginContainer: {
    padding: 32,
    paddingVertical: 56
  },

  loginTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  loginText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    lineHeight: 34,
    color: '#32264D'
  },

  createAccountText: {
    color: '#8257E5',
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 24,
  },

  inputContainer: {
    justifyContent: 'space-between',
    marginVertical: 24
  },

  emailInput:{
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  passwordInput:{
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },

  loginBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  },

  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  checkBox: {
    width: 20,
    height: 20,
  },

  checkBoxText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 24,
    color: '#9C98A6',
    marginLeft: 12
  },

  forgotPasswordText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 24,
    color: '#9C98A6',
  },

  loginButton: {
    backgroundColor: '#DCDCE5',
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },

  loginButtonText: {
    fontFamily: 'Archivo_400Regular',
    color: '#9C98A6',
    fontSize: 16,
    lineHeight: 26
  },

  loginButtonEnabled: {
    backgroundColor: '#04D361'
  },

  loginButtonTextEnabled: {
    color: '#fff'
  },
});

export default styles;