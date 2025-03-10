import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import React, { useState } from 'react';

export default function App() {

  const [url, setUrl] = useState("");
  const [isQrGenerated, setIsQrGenerated] = useState(false);


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bubbleT} />
      <View style={styles.bubbleB} />
      
      <View style={styles.mainContainer}>
        <Text style={styles.text}>QR</Text>
        <Text style={styles.text}>Generator</Text>
          <View style={styles.subContainer}>

              <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder='Enter here url' placeholderTextColor={"#fff"}
                onChangeText={text=>{setUrl(text);setIsQrGenerated(false)}}/>

                <TouchableOpacity style={styles.button}
                 onPress ={()=>setIsQrGenerated(true)}>
                  <Text style={styles.qrg}>Generate QR</Text>
                </TouchableOpacity>
              </View >

              <View style={styles.qrcode}>
                {isQrGenerated && url ? 
                <QRCode value={url} size={200} />:
                <View style={styles.qr}>
                  <Text style={styles.qrtext}>QR Code Here</Text>
                </View>
                }
               
              </View>
          </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    position: 'relative',
  },
  bubbleT: {
    width: 300,
    height: 220,
    backgroundColor: '#7fff00',
    position: 'absolute',
    top: 0,
    right: 0,
    borderBottomLeftRadius: '100%',
  },
  bubbleB: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderTopRightRadius: '100%',
    backgroundColor: '#7fff00',
  },

  mainContainer: {
    padding: 20,
  },
  text: {
    color: '#fff',
    fontSize: 54,
    fontWeight: 'semibold',
  },

  subContainer:{
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input:{
    backgroundColor: '#333',
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#fff',
    borderRadius: 10,
    flex: 1,
  },
  button:{
    backgroundColor: '#7fff00',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },

  qrg:{
    color: '#333',
    fontSize: 18,
  },

  inputContainer:{
    flexDirection: 'row',
    gap: 10,
  },

  qrcode:{
    marginVertical: 80,
    borderColor: '#fff',
    borderWidth: 1,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
  },

  qr:{
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',

  },
  qrtext:{
    color: '#333',
    fontSize: 20,
  }
});