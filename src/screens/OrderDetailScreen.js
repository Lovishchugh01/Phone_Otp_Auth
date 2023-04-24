import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Container } from '../styles/styles'
import { Header } from '../components/Header'
import { AntDesign, Entypo } from '@expo/vector-icons';
import { Button } from '../components/Button';

export const OrderDetailScreen = ({ route }) => {
    const { orderId, item_type, raddress, saddress, date, price, status } = route.params;
    return (
        <Container marginTop={10}>
            <Header title="Order details" />
            <View paddingHorizontal={25} marginVertical={10}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#8E8EA1', fontWeight: 600, fontFamily:"Montserrat_600SemiBold" }}>Order {orderId} </Text>
                    <Text style={{ backgroundColor: '#e3e3e8', color: '#8E8EA1', fontWeight: 600, borderRadius: 15, fontSize: 12, paddingVertical: 5, paddingHorizontal: 20, fontFamily:"Montserrat_400Regular" }}>Pending</Text>
                </View>
                <Text style={{fontFamily:"Montserrat_400Regular"}}>Item Type: <Text style={{ fontWeight: 600, lineHeight: 20,fontFamily:"Montserrat_600SemiBold"}}>{item_type}</Text></Text>

                <View marginLeft={-6} marginTop={8} flexDirection="row" >
                    <View></View>
                    <Entypo name="location-pin" size={24} color="#BFBFBF" />
                    <Text style={{ color: '#8E8EA1', fontSize: 12, fontFamily:"Montserrat_400Regular"}}>{saddress}</Text>
                </View>
                <View marginBottom={10} marginTop={-10} marginLeft={18}>
                    <Text style={{ color: '#8E8EA1', fontFamily:"Montserrat_400Regular" }}>{date}</Text>
                </View>
                <View marginLeft={-6} marginTop={5} flexDirection="row">
                    <Entypo name="location-pin" size={24} color="#FF9C1C" />
                    <Text style={{ color: '#8E8EA1', fontSize: 12, fontFamily:"Montserrat_400Regular"}}>{raddress}</Text>
                </View>

                <View marginBottom={10} marginTop={-10} marginLeft={18}>
                    <Text style={{ color: '#8E8EA1', fontFamily:"Montserrat_400Regular" }}>7 Mar ,2022, 09:00 PM</Text>
                </View>
                </View>
                <View paddingHorizontal={10}>
                    


                <View style={styles.billing}>
                    <Text style={{fontFamily:"Montserrat_400Regular"}}>Billing Detials</Text>
                    <View style={styles.flex}>
                        <Text style={{ borderBottomWidth: 1,fontFamily:"Montserrat_400Regular",  borderStyle: 'dashed', color: '#0AB7EE', borderColor:"#B4B4B4" }}>Delivery fee for 20km</Text>
                        <Text style={{ fontFamily:"Montserrat_600SemiBold" }}>{price}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: '#B4B4B4' }} />
                    </View>
                    <View style={styles.flex}>
                        <Text style={{ fontFamily:"Montserrat_600SemiBold" }}>Paid</Text>
                        <Text style={{ fontFamily:'Montserrat_600SemiBold' }}>{price}</Text>
                    </View>
                </View>
            </View>

            <View marginTop="80%" padding={16}>
                <Button title="Chat" />
            </View>


        </Container>
    )
}

const styles = StyleSheet.create({
    location: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
    },
    button: {
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: '#0C8A7B1A',
        width: "100%",
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        textAlign: 'center',
        color: '#0C8A7B'
    },
    cancelbutton: {
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: '#FF151514',
        width: "100%",

    },
    canceltext: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        textAlign: 'center',
        color: '#FF1515'
    },
    billing: {
        padding: 10,
        backgroundColor: "#fff",
        borderColor: '#D8D6D4',
        borderWidth: 1,
        borderRadius: 8,
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    }
})