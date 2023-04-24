import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './src/screens/LoginScreen';
import { RegisterScreen } from './src/screens/RegisterScreen';
import { OtpScreen } from './src/screens/OTPScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { OrdersScreen } from './src/screens/OrdersScreen';
import { OrderDetailScreen } from './src/screens/OrderDetailScreen';
// import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

const Stack = createNativeStackNavigator();


export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });
  if (!fontsLoaded) {
    // return <AppLoading />;
    return <></>;
  } else {

    return (
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Orders" component={OrdersScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name="OTP" component={OtpScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Orderdetail" component={OrderDetailScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: Platform.OS === 'android' ? 25 : 0,
    // paddingBottom: Platform.OS === 'android' ? 25 : 0,
  },
});
