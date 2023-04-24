import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign, Entypo } from '@expo/vector-icons';
import { BorderButton, Button, WhiteButton } from './Button';
import { ButtonView } from '../styles/styles';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const OrderCard = () => {
    const navigation = useNavigation();

    return (
        <ScrollView paddingHorizontal={15} paddingVertical={25} backgroundColor="#fff">
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{ color: '#8E8EA1', fontFamily:"Montserrat_600SemiBold" }}>Order #454353</Text>
                <View style={styles.location}>

                <Text style={{fontFamily:"Montserrat_600SemiBold", backgroundColor: '#e3e3e8', color:'#8E8EA1', fontWeight:600, borderRadius:15, marginRight:40 ,fontSize: 12, paddingVertical:5, paddingHorizontal:20 }}>Pending</Text>
                <AntDesign name="message1" size={24} color="black" />
                </View>
            </View>
            <Text style={{fontFamily:"Montserrat_400Regular"}}>Item Type: <Text style={{lineHeight:20,fontFamily:"Montserrat_600SemiBold"}}>Electronics</Text></Text>

            <View marginLeft={-6} marginTop={8} flexDirection="row" >
                <Entypo  name="location-pin" size={24} color="#BFBFBF" />
                <Text style={{ color: '#8E8EA1', fontSize:12, fontFamily:"Montserrat_400Regular" }}>Morristown, NJ 07960, United States</Text>
            </View>

            

            <View marginLeft={-6} marginTop={5} flexDirection="row">
                    <Entypo name="location-pin" size={24} color="#FF9C1C" />
                    <Text style={{ color: '#8E8EA1', fontSize:12, fontFamily:"Montserrat_400Regular" }}>Morristown, NJ 07960, United States</Text>
            </View>

            <View marginBottom={10} style={styles.location}>
                <Text style={{ color: '#8E8EA1', fontFamily:"Montserrat_400Regular" }}>7 Mar ,2022, 08:00 PM</Text>
                <Text style={{ fontSize: 20, fontWeight: 600, color: "#394F6B", fontFamily:"Montserrat_600SemiBold" }}>$ 20</Text>

            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#0000000D' }} />
            </View>

            <View style={styles.buttonView}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('Orderdetail', {
                        orderId: '#454353',
                        item_type: "Electronics",
                        raddress: "Morristown, NJ 07960, United States",
                        saddress:"Morristown, NJ 07960, United States",
                        date:'7 Mar ,2022, 08:00 PM',
                        price:'$ 20',
                        status:'Pending',
                    })
                }}>
                    <View style={styles.button} >
                        <Text style={styles.text}>View Details</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.cancelbutton}>
                        <Text style={styles.canceltext}>Cancel</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    location: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:25,
    },
    button: {
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor:'#0C8A7B1A',
        width:"100%",
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        textAlign: 'center',
        color: '#0C8A7B',
      fontFamily: "Montserrat_400Regular",

    },
    cancelbutton:{
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor:'#FF151514',
        width:"100%",

    },
    canceltext:{
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        textAlign: 'center',
        color: '#FF1515',
      fontFamily: "Montserrat_400Regular",
    }
})