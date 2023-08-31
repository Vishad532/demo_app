import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Menu from './Menu'
import { SafeAreaView } from 'react-native'

export default function App() {
  return (
    <NavigationContainer>
      <Menu />
    </NavigationContainer>
  )
}
