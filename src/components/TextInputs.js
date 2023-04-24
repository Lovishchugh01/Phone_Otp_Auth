import { KeyboardAvoidingView, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';

export const TextInputs = (props) => {
  const { label = 'Name', value, onChangeText, placeholder, secureTextEntry } = props;
  const isPassword = secureTextEntry === true;
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View marginBottom={20}>
      <TextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        underlineColor="transparent"
        theme={{ colors: { primary: '#0C8A7B', background: 'black' } }}
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderWidth: 1,
          borderColor: isFocused ? '#0C8A7B' : '#808080',
          color: 'black'
        }}
        secureTextEntry={isPassword && !showPassword}
        right={
          isPassword ? (
            <TextInput.Icon
              icon={showPassword ? 'eye-off' : 'eye'}
              onPress={togglePasswordVisibility}
            />
          ) : null
        }
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};
