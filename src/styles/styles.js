import { SafeAreaView, Text, View, Platform, TextInput, ScrollView } from "react-native"
import styled from "styled-components"

// common Css
export const Container = styled(SafeAreaView)`
  padding-top: ${Platform.OS === 'android' ? '35px' : '0px'};

`
export const Heading = styled(Text)`
  color:#fff;
  font-size:30px;
  font-family:Montserrat_600SemiBold;
`
export const Subheading = styled(Text)`
  color:#fff;
  font-family: Montserrat_400Regular;

`
export const Main = styled(SafeAreaView)`
    background-color: #0C8A7B;
    padding-top: ${Platform.OS === 'android' ? '30px' : '0px'};
    // padding:15px;
`
export const Wrapper = styled(View)`
    flex-direction:row;
    justify-content:space-between;
    padding:15px;
`
export const TextView = styled(View)`
  padding:15px;
`
export const ErrorText = styled(Text)`
  color:red;
  text-align:center;
  font-size:18px;
  font-family: Montserrat_400Regular;

`
// Home Screen css

export const Footer = styled(View)`
  background-color:#0C8A7B;
  width:100%;
  margin-top:auto;
  padding:16px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`

export const ButtonView = styled(View)`
  flex-direction:row;
  justify-content: space-between;
  margin-vertical:30px;
`


// Login Screen Css

export const PhoneView = styled(ScrollView)`
  background-color: #fff;
  padding:15px;4
  border:1px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`
export const SignupView = styled(View)`
  display:flex;
  flex-direction:row;
  background-color:#fff;
  padding-vertical:20px;
  justifyContent:center;
  margin-top:85%;
  `
  export const BorderView = styled(View)`
  border: 1px solid #0C8A7B;
    padding:5px 20px;
    border-radius:10px;
    margin:20px 0px 90px;
  `
export const PhoneInputView = styled(View)`
  padding-vertical:10px;
  flex-direction:row;
  align-items:center;
`

// Register Screen Css

export const RegisterView = styled(View)`
  background-color: #fff;
  padding:15px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

// OTP Screen Css

export const OtpView = styled(View)`
  background-color: #fff;
  padding:15px;
  // border:1px solid #0C8A7B;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`
export const OtpInput = styled(TextInput)`
    background-color:#F3F3F3;
    color:black;
    padding:8px;
    font-size:25px;
    borderRadius: 5px;
    textAlign: center;
    width:15%;
    margin-horizontal:4px;
    font-family: Montserrat_400Regular;

`
export const OtpInputView = styled(View)`
    flex-direction:row;
    align-items:center;
    justify-content:center;
    padding:20px;
`
export const ResendView = styled(View)`
  flex-direction:row;
  background-color:#fff;
  padding-vertical:20px;
`
export const ContinueView = styled(View)`
  background-color:#fff;
  // padding-bottom:20px;
  margin-top:50px;
`


