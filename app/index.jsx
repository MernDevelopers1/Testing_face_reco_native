import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Main from '../components/custom/Main'

const Home = () => {
  
  return (
    <View style={styles.container}>
      <Main/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:"center",
    backgroundColor:"lightyellow"
  },
});