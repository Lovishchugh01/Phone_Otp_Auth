import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button } from '../components/Button';
import { PhoneView, Heading, Main, Subheading, TextView, Wrapper, BorderView, PhoneInputView, SignupView, ErrorText } from '../styles/styles';
import CountryPicker from 'react-native-country-picker-modal'
import { PhoneAuthProvider, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseAuthApplicationVerifier
} from "expo-firebase-recaptcha";
import { auth, firebaseConfig } from '../../firebase';

export const LoginScreen = () => {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [callingCode, setCallingCode] = useState('91')
  const [countryCode, setCountryCode] = useState('IN');
  const [phone, setPhone] = useState('')
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [error, setError] = useState(null)
  recaptchaVerifier = useRef('');

  
  // const onPressSendVerificationCode = async () => {
  //   const phoneProvider = new PhoneAuthProvider(auth);
  //   console.log(`+${callingCode}${phone}`);
  //   const verificationId = await phoneProvider.verifyPhoneNumber(
  //     `+${callingCode}${phone}`,
  //     recaptchaVerifier.current
  //   );

  //   console.log("verificationId", verificationId);
  //   setVerificationId(verificationId);
  //   navigation.navigate("OTP", {
  //     verificationId
  //   })
  // };

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
    console.log(phone.length === 10);
    if(!(phone.length === 10)){
      setError("Phone number must be exactly 10 digits.")
      return;
    }
    const phoneNumber = `+${callingCode}${phone}`;
    console.log(phoneNumber);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phoneNumber:`+${callingCode}${phone}` }),
    };

    try {
      await fetch(
        "http://192.168.1.3:3000/auth/Signin",requestOptions
      ).then((response) => {
        // console.log(response.ok);
        
        if(!response.ok){
          response.json().then((data) => {
            setError(data.message)    
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
        <AntDesign name="arrowleft" size={24} color="white" onPress={()=>navigation.goBack()} />
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Subheading>Register</Subheading>
        </TouchableOpacity>
      </Wrapper>
      <TextView>
        <Heading>Sign in</Heading>
        <Subheading marginVertical={20}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ipsa exercitationem excepturi et</Subheading>
      </TextView>

      <PhoneView flex={1}>
        {error && <ErrorText>{error}</ErrorText>}
        <BorderView>

          <Text  style={{color:'#808080', position:"absolute", top:-10, left:12, paddingHorizontal:6,backgroundColor:'white', fontFamily:"Montserrat_400Regular"}}>Phone</Text>
        <PhoneInputView>
            <CountryPicker
              withFilter
              countryCode={countryCode}
              withFlag
              // withCountryNameButton
              withAlphaFilter={false}
              withCallingCode
              withCurrencyButton={false}
              onSelect={country =>{
                // console.log(country)
                const { cca2, callingCode} = country;
                setCountryCode(cca2)
                setCallingCode(callingCode[0])

              }}
              containerButtonStyle={{
                alignItems:"center",
                marginRight:-10,
              }}
            />
            <Text style={{fontSize:20}}> <AntDesign name="down" size={12} color="black" /> | </Text>
          <TextInput value={phone} flex={1} 
          onChangeText={text => {
            setPhone(text)
            setError(null)
            }} 
            style={{
              fontFamily:"Montserrat_400Regular"
            }}
          mode="outlined" keyboardType={'phone-pad'} maxLength={10} placeholder='Phone' />
        </PhoneInputView>
        </BorderView>
        
        <Button onPress={handleSubmit} title="Sign in" />


      <SignupView>

        <Text style={{fontFamily:"Montserrat_400Regular"}}>Don’t have an account? </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
          <Text style={{ color: 'orange', fontFamily:"Montserrat_400Regular" }}> Sign up </Text>
        </TouchableOpacity>
      </SignupView>
      </PhoneView>
      <StatusBar style="light" />

      

    </Main>
  )
}