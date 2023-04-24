import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { auth } from '../../firebase'

export const ProfileScreen = () => {
    console.log(auth.currentUser)
  return (
    <SafeAreaView>
      <Text>ProfileScreen</Text>
    </SafeAreaView>
  )
}
