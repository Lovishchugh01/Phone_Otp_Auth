import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Container } from '../styles/styles'
import { Header } from '../components/Header'
import { HorizontalScroll } from '../components/HorizontalScroll'
import { OrderCard } from '../components/OrderCard'
import { StatusBar } from 'expo-status-bar'

export const OrdersScreen = () => {

  useEffect(() => {
    async function fetchData() {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
  
      try {
        const response = await fetch("http://192.168.106.111:3000/orders", requestOptions);
        
        if (response.ok) {
          const data = await response.json();
          console.log(data);
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchData();
  }, []);
  


  return (
    <Container>
      <Header title="Orders" />
      <HorizontalScroll/>
      <OrderCard/>

      <StatusBar style="auto" />

    </Container>
  )
}
