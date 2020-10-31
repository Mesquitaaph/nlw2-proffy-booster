import React, { useState } from 'react';
import { Text, TextInput, View, TextInputProperties } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

interface InputProps extends TextInputProperties{
  password?: boolean;
}

const Input:React.FC<InputProps> = ({ password=false, placeholder, onChangeText, style }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  function handleToggleVisiblePassword() {
    setIsVisible(!isVisible);
  }

  function handleFocusInputBar() {
    setIsFocused(true);
  }

  function handleUnFocusInputBar() {
    return setIsFocused(false);
  }

  return (
    <View style={styles.container}>
      <TextInput
        onBlur={handleUnFocusInputBar}
        onFocus={handleFocusInputBar}
        onChangeText={onChangeText}
        secureTextEntry={!isVisible && password}
        style={[styles.input, style]}   
      />
      { isFocused && <View style={styles.leftBar}/> }
      
      
      { <Text style={styles.placeholderTextFocus}>{placeholder}</Text> }

      { password &&
        <BorderlessButton onPress={handleToggleVisiblePassword} style={styles.iconButton}>
          { isVisible ? 
              <Feather color='#8257E5' name="eye-off" size={18} /> :
              <Feather color='#9C98A6' name="eye" size={18} />
          }
        </BorderlessButton>
      }      
    </View>
  );
}

export default Input;