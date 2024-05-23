import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import App from '@/components/custom/Upload_image';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function HomeScreen() {
  const [base64Image, setBase64Image] = useState(null);
  return (
    <Text>Demo</Text>
   
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:"gray"
  },
  preview: {
    flex: 1,
    alignSelf: 'stretch',
  },
});
