import React, { useState } from 'react';
import { View, ImageBackground, Image, Text, CheckBox, KeyboardAvoidingView, Platform } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import logoImg from '../../assets/images/logo.png';

import Input from '../../components/Input';

import styles from './styles';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberCheckBox, setRemeberCheckBox] = useState(false);
  
  function handleCreateAccount() {

  }

  function handleForgotPassword() {
    
  }

  function handleLoginSubmit() {
    console.log({
      email,
      password,
      rememberCheckBox
    })
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={56}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <ImageBackground
          source={giveClassesBgImage}
          resizeMode="contain"
          style={styles.content}
        >
          <Image source={logoImg} style={styles.logoImg}/>
          <Text style={styles.logoText}>Sua plataforma de estudos online.</Text>
        </ImageBackground>

        <View style={styles.loginContainer}>
          <View style={styles.loginTopContainer}>
            <Text style={styles.loginText}>Fazer login</Text>
            <BorderlessButton onPress={handleCreateAccount}>
              <Text style={styles.createAccountText}>Criar uma conta</Text>
            </BorderlessButton>
          </View>

          <View style={styles.inputContainer}>
            <Input 
              placeholder="E-mail"
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.emailInput}
            />
            <Input 
              placeholder="Senha"
              value={password}
              onChangeText={text => setPassword(text)}
              password
              style={styles.passwordInput}
            />
          </View>
          
          <View style={styles.loginBottomContainer}>
            <View style={styles.rememberMeContainer}>
              <CheckBox
                value={rememberCheckBox}
                onValueChange={setRemeberCheckBox}
                style={styles.checkBox}
              />
              <Text style={styles.checkBoxText}>Lembre-me</Text>
            </View>

            <BorderlessButton onPress={handleForgotPassword}>
              <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
            </BorderlessButton>
          </View>

          <RectButton
            onPress={handleLoginSubmit}
            enabled={email && password ? true : false}
            style={[ styles.loginButton, email && password ? styles.loginButtonEnabled : {} ]}
          >
            <Text style={[ styles.loginButtonText, email && password ? styles.loginButtonTextEnabled : {} ]}>
              Entrar
            </Text>
          </RectButton>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Login;