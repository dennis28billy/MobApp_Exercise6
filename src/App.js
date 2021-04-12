import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import HomeScreen from './pages/userlist/index'
import Registrasi from './pages/registrasi/index'
const App = () => {
  return (
    <ScrollView>
      <Registrasi/>
      <HomeScreen/>
    </ScrollView>
  )  
}

export default App

const styles = StyleSheet.create({})