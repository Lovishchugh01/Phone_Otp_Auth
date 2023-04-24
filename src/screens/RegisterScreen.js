import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button } from '../components/Button';
import { TextInputs } from '../components/TextInputs';
import { BorderView, ErrorText, Heading, Main, PhoneInputView, RegisterView, Subheading, TextView, Wrapper } from '../styles/styles';
import { useRef } from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import { signInWithPhoneNumber } from 'firebase/auth';
import { auth, firebaseConfig } from '../../firebase';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';


export const RegisterScreen = () => {
  const navigation = useNavigation();
  const [callingCode, setCallingCode] = useState('91')
  const [countryCode, setCountryCode] = useState('IN');
  const [error, setError] = useState(null)
  const [phone, setPhone] = useState('')
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationId, setVerificationId] = useState("");
  recaptchaVerifier = useRef('');

  function onCaptcha() {
    if(!window.recaptchaVerifier){
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': () => {onSignup},
        'expired-callback': () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        }
      }, auth);
    }
  }

  const handleSubmit = async() =>{
    // console.log(phone.length === 10);
    // if(!(phone.length === 10)){
    //   setError("Phone Number size is less than 10")
    //   return;
    // }
    const phoneNumber = `+${callingCode}${phone}`;
    console.log(phoneNumber);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phoneNumber:`+${callingCode}${phone}` }),
    };

    try {
      await fetch(
        "http://192.168.106.111:3000/auth/Signup",requestOptions
      ).then((response) => {
        // console.log(response.ok);
        
        if(!response.ok){
          response.json().then((data) => {
            console.log(data.errors[0].msg);
            setError(data.errors[0].msg)    
          });
        }
        else{
          onSignup();
        }
        
      });
    } catch (error) {
      console.error(error);
    }

  }
  

  const onSignup = () => {

    onCaptcha();

    const appVerifier = recaptchaVerifier.current;
    console.log(appVerifier);
    signInWithPhoneNumber(auth, `+${callingCode}${phone}`, appVerifier)
      .then((confirmationResult) => {
        // console.log(confirmationResult);
        setVerificationId(confirmationResult.verificationId);
        navigation.replace("OTP", {
          verificationId: confirmationResult.verificationId,
          phoneNumber:`+${callingCode}${phone}`,
        });
      }).catch((error) => {
        console.log(error);
    });
  }
  

  return (
    <Main flex={1}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        // androidHardwareAccelerationDisabled
        // attemptInvisibleVerification={true}
      />
      <Wrapper>
        <AntDesign name="arrowleft" size={24} color="white" onPress={() => navigation.goBack()} />
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
          {error && <ErrorText>{error}</ErrorText>}
          <BorderView>

            <Text style={{ color: '#808080', position: "absolute", paddingHorizontal:6, top: -10, left: 12, backgroundColor: 'white', fontFamily:"Montserrat_400Regular" }}>Phone</Text>
            <PhoneInputView>
              <CountryPicker
                withFilter
                countryCode={countryCode}
                withFlag
                // withCountryNameButton
                withAlphaFilter={false}
                withCallingCode
                withCurrencyButton={false}
                onSelect={country => {
                  // console.log(country)
                  const { cca2, callingCode } = country;
                  setCountryCode(cca2)
                  setCallingCode(callingCode[0])
                }}
                containerButtonStyle={{
                  alignItems: "center",
                  marginRight: -10,
                }}
              />
              <Text style={{ fontSize: 20 }}> <AntDesign name="down" size={12} color="black" /> | </Text>
              <TextInput value={phone} flex={1} 
                onChangeText={text => {
                  setPhone(text)
                  setError(null)
                }} 
                style={{
                  fontFamily:"Montserrat_400Regular"
                }}
                mode="outlined" keyboardType={'phone-pad'} maxLength={10} placeholder='Phone'
              />
            </PhoneInputView>
          </BorderView>
          <View paddingBottom={15}>
            <Button onPress={handleSubmit} title="Sign up" />
          </View>
        </RegisterView>
      </ScrollView>

      <StatusBar style="light" />

    </Main>
  )
}
