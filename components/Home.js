import React from "react";
import { Text, View, Image, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function HomeScreen({ navigation }) {

  function Disciplina({title, image}){
    return(
      <View style={{flexDirection: 'row', backgroundColor: '#FFF'}}>
        <Image
          source={image}
          style={{height: 50, width: 50}}
        />
        <Text>{title}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.sectionstyle}>
          <Text style={styles.text}> Olá, vamos estudar? </Text>
        </View>
        <TouchableOpacity onPress={() => { navigation.navigate('Biologia') }}>
          <Disciplina title={'Biologia'} image={require('../img/genetica.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Botao} onPress={() => { navigation.navigate('Biologia') }}>
          <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', alignItems: 'center', marginTop: 25 }}>Biologia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Botao} onPress={() => { navigation.navigate('Biologia') }}>
          <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', alignItems: 'center', marginTop: 25 }}>Biologia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Botao} onPress={() => { navigation.navigate('Biologia') }}>
          <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', alignItems: 'center', marginTop: 25 }}>Biologia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Botao} onPress={() => { navigation.navigate('Biologia') }}>
          <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', alignItems: 'center', marginTop: 25 }}>Biologia</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    backgroundColor: '#E1E1E1',
    paddingHorizontal: 20
  },
  sectionstyle: {
    marginTop: 10,
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'rgb(255, 255 ,255)',
  },

  text: {
    fontWeight: 'bold',
    alignItems: 'center',
    marginTop: 4,
  },

  Botao: {
    backgroundColor: 'rgb(255, 255 ,255)',
    width: '100%',
    height: 80,
    marginTop: 20,
    borderRadius: 5,
    padding: 5,
    textAlign: 'center',

  },

})

