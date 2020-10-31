import React, { useState } from 'react';
import { View, ImageBackground, Image, Text, CheckBox, KeyboardAvoidingView, Platform } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';

import backIcon from '../../assets/images/icons/back.png';

import styles from './styles';

function CreateAccountLogin() {
  const { goBack, reset } = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleGoBack() {
    goBack();
  }

  function handleNavigateToCreateAccountLogin() {
    reset({
      index: 0,
      routes: [{ name: '' }]
    })
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={56}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <BorderlessButton onPress={handleGoBack} style={styles.goBackButton}>
          <Image source={backIcon} resizeMode="contain"/>
        </BorderlessButton>
        <View style={styles.header}>
          <Text style={styles.titleText}>Crie sua conta gratuita</Text>
          <Text style={styles.subTitleText}>Basta preencher esses dados e você estará conosco.</Text>
        </View>

        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>02. E-mail e Senha</Text>

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

          <RectButton
            onPress={handleNavigateToCreateAccountLogin}
            enabled={true}
            style={[ styles.signInButton, email && password ? styles.signInButtonEnabled : {} ]}
          >
            <Text style={[ styles.signInButtonText, email && password ? styles.signInButtonTextEnabled : {} ]}>
              Concluir cadastro
            </Text>
          </RectButton>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default CreateAccountLogin;