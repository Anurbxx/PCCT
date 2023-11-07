import React, {useState} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from '../screens/Home'
import Conteudo from '../screens/conteudo'
import Salvos from '../screens/salvos'
import Login from '../screens/Login'

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const StackAuth = createNativeStackNavigator();

function RouteAuth(){
    return(
        <StackAuth.Navigator>
            <StackAuth.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />

            {/*<StackAuth.Screen
            name="Inscreva_se"
            component={Inscreva_se}
            options={{ headerShown: false }}
/>*/}
        </StackAuth.Navigator>
    )
}

function HomeStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
  
        <Stack.Screen 
            name="TelaHome" 
            component={Home}
        />

       
  
      </Stack.Navigator>
    );
  }

export function Routes () {
    const [auth, setAuth] = useState(false);
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor:'white',
                tabBarShowLabel: false,
                
                tabBarHideOnKeyboard: true,

                tabBarStyle:{
                    backgroundColor: 'white',
                    paddingLeft:40,
                    paddingRight:40,
                    height:'7%'
                }
                   
            }}
            initialRouteName='RouteAuth'  
        >
            <Tab.Screen
                name="TelaHome"
                component={HomeStack}
                options={{
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: '#24132C',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                    tabBarIcon: ({color , size , focused}) => {
                        if(focused){
                            return <Ionicons name="home" size={24} color="#24132C" />
                        }
                            return <Ionicons name="home-outline" size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen
                name="TelaConteudo"
                component={Conteudo}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color , size , focused}) => {
                        if(focused){
                            return <MaterialCommunityIcons name="bookshelf" size={24} color="#24132C" />
                        }
                            return<MaterialCommunityIcons name="bookshelf" size={24} color="#808080" />
                    }
                }}
            />

            <Tab.Screen
                name="TelaSalvos"
                component={Salvos}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color , size , focused}) => {
                        if(focused){
                          return  <AntDesign name="heart" size={24} color="#24132C" />
                        }
                          return  <AntDesign name="heart" size={24} color="#808080" />
                    }
                }}
            />
            <Tab.Screen
                name="RouteAuth"
                component={RouteAuth}
                options={{
                    headerShown: false,
                    tabBarItemStyle: { display: 'none' },
                    tabBarStyle: { display: 'none' },
                }}
            />
        </Tab.Navigator>
    )
}
