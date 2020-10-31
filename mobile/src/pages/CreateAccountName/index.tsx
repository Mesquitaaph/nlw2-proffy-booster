import React, { useState } from 'react';
import { View, ImageBackground, Image, Text, CheckBox, KeyboardAvoidingView, Platform } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';

import backIcon from '../../assets/images/icons/back.png';

import styles from './styles';

function CreateAccountName() {
  const { navigate, goBack } = useNavigation();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleGoBack() {
    goBack();
  }

  function handleNavigateToCreateAccountLogin() {
    navigate('CreateAccountLogin')
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
          <Text style={styles.signInText}>01. Quem é você?</Text>

          <View style={styles.inputContainer}>
            <Input 
              placeholder="Nome"
              value={name}
              onChangeText={text => setName(text)}
              style={styles.nameInput}
            />
            <Input 
              placeholder="Sobrenome"
              value={lastName}
              onChangeText={text => setLastName(text)}
              style={styles.lastNameInput}
            />
          </View>

          <RectButton
            onPress={handleNavigateToCreateAccountLogin}
            enabled={true}
            style={[ styles.signInButton, name && lastName ? styles.signInButtonEnabled : {} ]}
          >
            <Text style={[ styles.signInButtonText, name && lastName ? styles.signInButtonTextEnabled : {} ]}>
              Próximo
            </Text>
          </RectButton>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default CreateAccountName;