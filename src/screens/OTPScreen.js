import { Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components'
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button } from '../components/Button';
import { ContinueView, Heading, Main, OtpInput, OtpInputView, OtpView, ResendView, Subheading, TextView, Wrapper } from '../styles/styles';
import { PhoneAuthProvider, signInWithCredential, signInWithPhoneNumber } from 'firebase/auth';
import { useState } from 'react';
import { auth, firebaseConfig } from '../../firebase';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';


export const OtpScreen = ({ route }) => {
  const navigation = useNavigation();
  const { verificationId, phoneNumber } = route.params;
  const [countdown, setCountdown] = useState(30);
  recaptchaVerifier = useRef('');
  const [resend, setResend] = useState('')
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);
  const input5 = useRef(null);
  const input6 = useRef(null);
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');

  const handleTextChange = (text, ref) => {
    if (text.length === 1 && ref && ref.current) {
      ref.current.focus();
    }
  };

  useEffect(() => {
    let interval = null;
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [countdown]);

  const  resendOTP = async () => {
    const phoneProvider = new PhoneAuthProvider(auth);
    // console.log(`+${callingCode}${phone}`);
    const verificationId = await phoneProvider.verifyPhoneNumber(
      phoneNumber,
      recaptchaVerifier.current
    );

    // console.log("verificationId", verificationId);
    setResend(verificationId);
    setCountdown(30); // Reset countdown timer on resend
  };

  // console.log(value1 + value2 + value3 + value4 + value5 + value6);


  const handleBackspace = (event, ref) => {
    if (event.nativeEvent.key === 'Backspace' && ref && ref.current) {
      ref.current.focus();
    }
  };

  const onVerifyOTP = async () => {
    const verificationCode = value1 + value2 + value3 + value4 + value5 + value6;
    try {
    const credential = PhoneAuthProvider.credential(
    verificationId || resend,
    verificationCode
    );
    // console.log("dfd");
    await signInWithCredential(auth, credential);
    navigation.replace('Orders');
    } catch (error) {
    console.log("Error verifying OTP:", error);
    }
    };

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
      </Wrapper>
      <TextView>
        <Heading>Verification</Heading>
        <Subheading marginVertical={20}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ipsa exercitationem excepturi et</Subheading>
      </TextView>

      <OtpView flex={1}>
        <OtpInputView>
          <OtpInput
            maxLength={1}
            keyboardType={'numeric'}
            ref={input1}
            value={value1}
            onChangeText={(text) => {
              setValue1(text);
              handleTextChange(text, input2);
            }}
            onKeyPress={(event) => handleBackspace(event, null)}
          />
          <OtpInput
            maxLength={1}
            keyboardType={'numeric'}
            ref={input2}
            value={value2}
            onChangeText={(text) => {
              setValue2(text)
              handleTextChange(text, input3)
            }}
            onKeyPress={(event) => handleBackspace(event, input1)}
          />
          <OtpInput
            maxLength={1}
            keyboardType={'numeric'}
            ref={input3}
            value={value3}
            onChangeText={(text) => {
              setValue3(text)
              handleTextChange(text, input4)
            }}
            onKeyPress={(event) => handleBackspace(event, input2)}
          />
          <OtpInput
            maxLength={1}
            keyboardType={'numeric'}
            ref={input4}
            value={value4}
            onChangeText={(text) => {
              setValue4(text)
              handleTextChange(text, input5)
            }}
            onKeyPress={(event) => handleBackspace(event, input3)}
          />
          <OtpInput
            maxLength={1}
            keyboardType={'numeric'}
            ref={input5}
            value={value5}
            onChangeText={(text) => {
              setValue5(text)
              handleTextChange(text, input6)
            }}
            onKeyPress={(event) => handleBackspace(event, input4)}
          />
          <OtpInput
            maxLength={1}
            keyboardType={'numeric'}
            ref={input6}
            value={value6}
            onChangeText={(text) => {
              setValue6(text)
              handleTextChange(text, null)
            }}
            onKeyPress={(event) => handleBackspace(event, input5)}
          />
        </OtpInputView>
        
        <ResendView justifyContent="center" flexDirection="row">
      {countdown === 0 ? (
        <TouchableOpacity onPress={resendOTP}>
          <Text>Resend Code</Text>
        </TouchableOpacity>
      ) : (
        <Text>Resend Code in {countdown} seconds</Text>
      )}
    </ResendView>

        <ContinueView>
        <Button title="Continue" onPress={onVerifyOTP} />
      </ContinueView>
      </OtpView>
      <StatusBar style="light" />

    </Main>
  )
}