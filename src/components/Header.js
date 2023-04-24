import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { HeaderHeading, Subheading } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';

export const Header = (props) => {
  const { title = "Change me" } = props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>

        <AntDesign 
        onPress={()=>navigation.goBack()} 
        marginRight="auto" name="left" size={24} color="black" />
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

  },
  wrapper: {
    backgroundColor: "#fff",
    height: 50,
    width: 343,
    borderRadius: 8,
    // justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',


  },
  text: {
    textAlign: 'center',
    flex: 1,
    fontSize:16,
    fontFamily:'Montserrat_400Regular'

  }
})