import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import Historia from './components/historia';
import Historia2 from './components/historia2';
import Historia3 from './components/historia3';
import Login from './components/login';
import Inscreva_se from './components/inscreva-se'

const App = () => {
  function Welcome({ navigation }) {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./img/logo1.png')}
          style={styles.image}
          resizeMode="cover">
          <TouchableOpacity
            style={styles.Botao}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Iniciar</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Login'
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Inscreva_se"
          component={Inscreva_se}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: '#24132C',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              display: 'none',
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Biologia" component={Historia} 
        options={{
          headerStyle:{
            backgroundColor: '#24132C',
           }, 
           headerTintColor: '#ffffff',
        }}   
            />
        <Stack.Screen name="Filosofia" component={Historia2}
        options={{
          headerStyle:{
            backgroundColor: '##24132C',
           }, 
           headerTintColor: '#ffffff',
        }} 
            />
         <Stack.Screen name="Fisíca" component={Historia3}
         options={{
          headerStyle:{
            backgroundColor: '##24132C',
           }, 
           headerTintColor: '#ffffff',
        }} 
         />

        <Stack.Screen name="Geografia" component={Historia3}
         options={{
          headerStyle:{
            backgroundColor: '##24132C',
           }, 
           headerTintColor: '#ffffff',
        }} 
         />

        <Stack.Screen name="Literatura" component={Historia3}
         options={{
          headerStyle:{
            backgroundColor: '##24132C',
           }, 
           headerTintColor: '#ffffff',
        }} 
         />

        <Stack.Screen name="Matemática" component={Historia3}
         options={{
          headerStyle:{
            backgroundColor: '##24132C',
           }, 
           headerTintColor: '#ffffff',
        }} 
         />

        <Stack.Screen name="Portugûes" component={Historia3}
         options={{
          headerStyle:{
            backgroundColor: '##24132C',
           }, 
           headerTintColor: '#ffffff',
        }} 
         />





      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#24132C',
  },
  image: {
    width: 210,
    height: 150,
  },
  Botao: {
    backgroundColor: '#C42C47',
    width: 100,
    position: 'absolute',
    bottom: -200,
    marginLeft: '27%',
    borderRadius: 10,
    padding: 5,
    textAlign: 'center',
  },

});

export default App;
