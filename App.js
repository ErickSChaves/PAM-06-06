
import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  
  const [nome,setNome] = useState("Doni")
  const [entrada, setEntrada] = useState()


  useEffect(()=>{



    async function buscarNome(){

      const storageNome = await AsyncStorage.getItem('nome');

      if(storageNome !== null){
        setNome(storageNome)
      }



    }


    buscarNome();




    /*  async function gravarNome(){


      await AsyncStorage.setItem('nome', nome)

    }

    gravarNome(); */


  },[])








  function alterarNome(){

    setNome(entrada)
  }

  return (
    <View style={style.container}>
    <TextInput style = {style.entrada}  onChangeText = {(texto) => {setEntrada(texto)}}/>

      <Button style = {style.botao}  title = "Alterar nome" onPress = {alterarNome}></Button>
      <Text style = {{fontSize:20, marginTop:10}}>{nome}</Text>

      <StatusBar style="auto" />
    


    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botao: {
    width: '100%',
    marginBottom: 15
  },

  texto: {
    fontSize: 15,
    marginTop: 15
  },

  entrada: {
    borderWidth: 2,
    marginBottom: 5,
    marginTop: 10,
    borderColor: "black"
  },








});
