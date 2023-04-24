import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export const Button = (props) => {
    const { onPress,bg='black', width="100%" ,title = 'Save' } = props;
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.button} width={width} backgroundColor={bg}>
      <Text style={styles.text}>{title}</Text>
    </View>
    </TouchableOpacity>
  )
}

export const BorderButton = (props) => {
  const { onPress,bg='black', width="100%",title = 'Save' } = props;
return (
  <TouchableOpacity onPress={onPress}>
  <View style={styles.borderbutton} width={width} backgroundColor={bg}>
    <Text style={styles.text}>{title}</Text>
  </View>
  </TouchableOpacity>
)
}
export const WhiteButton = (props) => {
  const { onPress,bg='black', width="100%" ,title = 'Save' } = props;
return (
  <TouchableOpacity onPress={onPress}>
  <View style={styles.whiteButton} width={width} backgroundColor={bg}>
    <Text style={styles.whitetext}>{title}</Text>
  </View>
  </TouchableOpacity>
)
}




const styles = StyleSheet.create({
    button: {
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 50,
      borderRadius: 8,
      alignItems:'center',
      elevation: 3,
    
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      letterSpacing: 0.25,
      textAlign:'center',
      color:'#fff',
      fontFamily: "Montserrat_400Regular",
    },
    borderbutton:{
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 50,
      borderRadius: 8,
      borderWidth:1,
      alignItems:'center',
      borderColor:"#fff"
    },
    whiteButton:{
      justifyContent: 'center',
      paddingVertical: 13,
      paddingHorizontal: 50,
      borderRadius: 8,
      alignItems:'center'
    },
    whitetext:{
      color:"#0C8A7B",
      fontFamily: "Montserrat_400Regular",

    }
  });