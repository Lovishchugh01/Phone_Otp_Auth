import { View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button } from '../src/components/Button';
import { TextInputs } from '../src/components/TextInputs';
import { Heading, Main, RegisterView, Subheading, TextView, Wrapper } from '../src/styles/styles';


export const RegisterScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')
  
  return (
    <Main flex={1}>
      <Wrapper>
        <AntDesign name="arrowleft" size={24} color="white" onPress={()=>navigation.goBack()} />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Subheading>Sign in</Subheading>
        </TouchableOpacity>
      </Wrapper>
      <TextView>
        <Heading>Sign up</Heading>
        <Subheading marginVertical={20}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ipsa exercitationem excepturi et</Subheading>
      </TextView>
      
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

      <RegisterView flex={1}>
        <View marginVertical={5}>
          <TextInputs
            label="Name"
            value={name}
            onChangeText={text => setName(text)}
          />
          <TextInputs
            label="Phone"
            value={phone}
            onChangeText={text => setPhone(text)}
          />
          <TextInputs
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInputs
            label="Password"
            value={password}
            secureTextEntry
            onChangeText={text => setPassword(text)}
          />
          <TextInputs
            label="Confirm Password"
            value={cpassword}
            secureTextEntry
            onChangeText={text => setCpassword(text)}
          />
        </View>
        <View marginTop="auto" paddingBottom={25}>
          <Button onPress={()=> navigation.navigate('OTP')} title="Sign up" />
        </View>
      </RegisterView>
      </ScrollView>

      <StatusBar style="light" />

    </Main>
  )
}
