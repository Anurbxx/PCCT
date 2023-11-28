import React from "react";
import { Text, View , TouchableOpacity, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Profile(){
  return(
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.icon}>
          <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} color='#24132C' />
          </TouchableOpacity>
          
        </View>
        <View style={styles.icon2}>
          <FontAwesome  name="user-circle" size={100} color="#24132C" />
        </View>
        
        <View style={styles.conteudoo}>
          <View style={styles.conteudo}>
            <FontAwesome name="user" size={30} color="#8a8a8a" />
            <Text style={styles.texto}>Nome</Text>
            
          </View>
          <View style={styles.conteudo}>
            <FontAwesome name="user" size={30} color="#8a8a8a" />
            <Text style={styles.texto}>Nome de usuário</Text>
          </View>
        
        </View>
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create ({
  container:{
    width:'100%',
    height:'100%',
  },
  icon:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:12,
    
  },
  icon2:{
    alignItems:'center',
    marginTop:'40%'
  },
  conteudoo:{
    alignSelf:'center',
    marginTop:'9%',
  },
  conteudo:{
    flexDirection:'row',
    alignItems:'center',
    gap:6,
    borderBottomWidth:2,
    borderColor:'#24132C',
    padding:15
  },
  texto:{
    width:155
  }

})