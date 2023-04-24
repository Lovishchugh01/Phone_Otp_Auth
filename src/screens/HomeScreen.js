import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BorderButton, Button, WhiteButton } from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { Footer,ButtonView, Heading, Subheading } from '../styles/styles';

const HomeScreen = () => {
  const navigation = useNavigation();
  const LoginScreen = ()=>{
     navigation.replace('Login')
  }
  const RegisterScreen = ()=>{
    navigation.replace('Register')
 }
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        marginTop="auto"
      />
      <Footer>
        <Heading>Welcome</Heading>
        <Subheading>Lorem ipsum dolor sit pedit. Teculpa tempora est, expedita earum magni voluptas ullam modi reiciendis maiores.</Subheading>
        <ButtonView>
          <WhiteButton onPress={RegisterScreen} title="Sign up" bg="#fff"/>
          <BorderButton onPress={LoginScreen} title="Sign in" bg="#0C8A7B"/>
        </ButtonView>
      </Footer>
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
      fontFamily: 'Montserrat-Regular',
    }
})