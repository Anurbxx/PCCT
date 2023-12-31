import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Button from "../../components/button";



//Criação do modal
export default function TelaPerg({ navigation }) {


    //Criação de uma array de perguntas para ser mapeado
    const questions = [
      'Qual é o nome do seu animal de estimação?',
      'Qual é o nome da sua cidade natal?',
      'Qual é o nome do seu melhor amigo de infância?',
    ];
  
    return (
      <View style={styles.containerModal}>
        <View style={styles.modalContent}>
  
        {/* Criação do botão de fechar que fica no canto superior direito*/}
          <TouchableOpacity onPress={() => {navigation.goBack()}} style={{position: 'absolute', top: 0, right: 0, padding: 5}}>
            <View style={{height: 15, width: 15, backgroundColor: '#000'}}/>
          </TouchableOpacity>
  
          {/* Criação do Picker*/}
          <Picker
            style={styles.picker}
            //selectedValue={response}
            //onValueChange={(itemValue, itemIndex) =>
              //setResponse(itemValue)
            //}
            >
            {/*Item do picker para indicar a escolha da pergunta*/}
            <Picker.Item label="-- Selecione a pergunta" value="1" />
  
            {/*Aqui a array de questões é iterado para renderizar todas as perguntas declaradas*/}
  
            {questions.map((question, index) => (
            <Picker.Item key={index} label={question} value={question} />
            ))}
          </Picker>
  
          {/*Input de resposta*/}
          <TextInput
              style={styles.response}
              placeholder="Sua resposta"
              placeholderTextColor='#777'
          />
  
          <Picker
            style={styles.picker}
            //selectedValue={response}
            //onValueChange={(itemValue, itemIndex) =>
              //setResponse(itemValue)
            //}
            >
            <Picker.Item label="-- Selecione a pergunta" value="1" />
            {questions.map((question, index) => (
            <Picker.Item key={index} label={question} value={question} />
            ))}
          </Picker>
          <TextInput
              style={styles.response}
              placeholder="Sua resposta"
              placeholderTextColor='#777'
          />
          <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            {/*Modifiquei o botão para atender algumas necessidades (se puder olhar na pasta de componentes onde está o botão, verá algumas modificações no estilo. Acabei utilizando um operador ternário tratando os parâmetros passados aqui no botão abaixo, só pra agilizar)*/}
            <Button text="Salvar" color='white' shadow={true}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    linearGradient:{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
      },
    containerContent:{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
    },
    containerForm:{
      width: 230, 
      backgroundColor: 'rgba(255, 255, 255, 0.3)', 
      padding: 15,
      borderRadius: 15
    },
    input:{
      backgroundColor:'white',
      borderRadius:50,
      padding:4,
      paddingLeft:14
    },
    label:{
      color:'white',
      padding:5
    },
    openModal:{
      backgroundColor:'white',
      borderRadius:50,
      padding:4,
      paddingLeft:14
    },
    containerModal:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
    modalContent:{
      height: 400, 
      width: 350, 
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: 10,
      justifyContent: 'center'
    },
    picker:{
      backgroundColor:'white',
      borderRadius:50,
      padding:7,
      marginVertical: 10,
      marginHorizontal: 5,
      borderColor: '#FFF',
      shadowColor: '#000',
      shadowRadius: 10,
      shadowOpacity: 0.2
    },
    response:{
      backgroundColor:'white',
      borderRadius:50,
      padding:7,
      marginHorizontal: 5,
      marginBottom: 10,
      borderColor: '#FFF',
      shadowColor: '#000',
      shadowRadius: 10,
      shadowOpacity: 0.2
    },
  });
  