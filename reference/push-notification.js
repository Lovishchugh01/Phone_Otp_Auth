import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { getMessaging, getToken } from 'firebase/messaging';
import { auth, firebaseConfig } from '../../firebase';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../components/Button';
import * as Notifications from 'expo-notifications';

export const PushNotification = () => {
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  const registerForPushNotificationsAsync = async () => {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      console.log('Failed to get push token for push notification!');
      return;
    }
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log('FCM Token:', token);
  };

  return (
    <SafeAreaView flex={1} justifyContent="center">
      <Text>Profile Screen</Text>
      <Button title="Request Notification Permissions" onPress={registerForPushNotificationsAsync} />
    </SafeAreaView>
  );
};  
