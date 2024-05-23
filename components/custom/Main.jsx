import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useData } from './useContext/DataContext'
import {  Link, useRouter } from 'expo-router'

const Main = () => {
    const router = useRouter();
    const {Base64Image,setBase64Image} = useData();
    const postImage = async () => {
      try{
        const formdata = new FormData();
formdata.append("image1",Base64Image.image1);
formdata.append("image2",Base64Image.image2);

const requestOptions = {
  method: "POST",
  body: formdata,
   headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
  redirect: "follow"
};
console.log("http://192.168.60.116:8080/compare_faces")
fetch("http://192.168.60.116:8080/compare_faces", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
      }catch(e){
        console.log(e);
      }
        
    }
  return (
    <View style={styles.container}>
    {Base64Image && (Base64Image.image1 || Base64Image.image2) &&
    <View style={styles.imgContainer}>

      {Base64Image && Base64Image.image1 && (
        <Image
          style={styles.preview}
          source={{ uri: Base64Image.image1.uri }}
        />
      )}
      {Base64Image && Base64Image.image2 && (
        <Image
          style={styles.preview}
          source={{ uri: Base64Image.image2.uri }}
        />
      )}
    </View>}

      <View style={styles.ButtonContainer}>

      <Link style={styles.buttonStyle} href={`/Camera?image=1`}>
      <Text style={styles.buttonText}>Add Image 1</Text>

      </Link>
      <Link style={styles.buttonStyle} href={`/Camera?image=2`}>
      <Text style={styles.buttonText}>Add Image 2</Text>

      </Link>
      <TouchableOpacity style={styles.buttonStyle} disable={Base64Image&&Base64Image.image1&&Base64Image.image2? false:true} onPress={postImage}>
      <Text style={styles.buttonText}>Compare</Text>

      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonStyle,{backgroundColor:!Base64Image?"lightblue":"skyblue"}]} disabled={Base64Image? false: true} onPress={()=>setBase64Image({image1:"",image2:""})}>
      <Text style={styles.buttonText}>Reset</Text>

      </TouchableOpacity>
      </View>
      <Link style={styles.buttonStyle} href={`/Attendence`}>
      <Text style={styles.buttonText}>Attendence</Text>

      </Link>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    imgContainer:{
      width:"100%",
      height:"50%",
      flexDirection:"row"
    },
    preview: {
        height:"50%",
        width:"45%",
        margin:10,
        borderRadius:20,
        alignSelf: 'stretch',
  },

  buttonStyle:{
    paddingVertical:10,
    backgroundColor:"skyblue",
    width:"20%",
    borderRadius:10,
    marginVertical:10,
    textAlign:"center"

  },
  ButtonContainer:{
    justifyContent:"center",
    alignItems:"center",
    flexDirection: "row",
    gap:10, 
    flexWrap:"wrap"
  },
  buttonText:{
    textAlign:"center"
  }
})