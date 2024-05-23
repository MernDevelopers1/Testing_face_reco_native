import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import getItemFromStorage from "../utils/getter";


const Attendence = () =>{
useEffect(()=>{
    getItemFromStorage("Attendence")
})
    return <View style={styles.maincontainer}>

    <View style={styles.tiles}>
        <View style={styles.textView}>
            <Text>Date: 2024-05-01 00:00:00.000</Text> 
            <AntDesign name="checkcircle" size={24} color="green" /> 
        </View>
    </View>
 
    </View>
};

export default Attendence;

const styles = StyleSheet.create({
  maincontainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"lightgreen",
    padding:10,
  },
  tiles:{
    width:'100%',
    paddingVertical:20,
    backgroundColor:"lightblue",
    borderRadius:20,
    paddingLeft:10
  }, 
  textView:{
    flexDirection:"row"
  }
})
