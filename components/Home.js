import React from "react";
import { Text, View, Image, StyleSheet, SafeAreaView,TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function HomeScreen ({navigation}){
  return(
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
    <View style={styles.sectionstyle}>
    <Text style= {styles.text}> Olá, vamos estudar? </Text>
    </View>
    <TouchableOpacity style={styles.Botao}onPress={()=>{navigation.navigate('Pré-socráticos (VI a IV a.C)')}}>
        <Text style={{color:'black',fontWeight:'bold', textAlign:'center', alignItems:'center',marginTop:25}}>Pré-socráticos (VI a IV a.C)</Text>
        </TouchableOpacity>
    </View>
      
    <View>
    <TouchableOpacity style={styles.BotaoII}onPress={()=>{navigation.navigate('Filosofia Clássica(V a IV a.C)')}}>
        <Text style={{color:'black',fontWeight:'bold',marginTop:25}}>Filosofia Clássica (V a IV a.C)</Text>
        </TouchableOpacity>
    </View>

     <View>
    <TouchableOpacity style={styles.BotaoIII}onPress={()=>{navigation.navigate('Filosofia Helenística(III a I a.C)')}}>
        <Text style={{color:'black',fontWeight:'bold',marginTop:25}}>Filosofia Helenística(III a I a.C)</Text>
        </TouchableOpacity>
    </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
 container: {
  flex:1,
  alignItems:'center',
  backgroundColor: '#E1E1E1',
 
  
 },
 sectionstyle: {
   marginTop: 10,
  paddingHorizontal:60,
  paddingVertical:10,
  borderRadius: 20,
  backgroundColor: 'rgb(255, 255 ,255)',
  
  
 },

 text:{
   fontWeight:'bold',
   alignItems: 'center',
   marginTop: 4,
 },

  Botao:{
    backgroundColor: 'rgb(255, 255 ,255)',
    width:270,
    height: 80,
    marginTop: 70,
    bottom:50,
    borderRadius:5,
    padding:5,
    textAlign:'center',

  },

    BotaoII:{
    backgroundColor: 'rgb(255, 255 ,255)',
    width:270,
    height: 80,
    marginTop: -320,
    bottom:50,
    borderRadius:5,
    padding:5,
    textAlign:'center',
    marginLeft: 30,
    
  },
  BotaoIII:{
    backgroundColor: 'rgb(255, 255 ,255)',
    width:270,
    height: 80,
    marginTop: -200,
    bottom:50,
    borderRadius:5,
    padding:5,
    textAlign:'center',
    marginLeft: 30,
    
  },
  
  
})

  