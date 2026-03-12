import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import {  rotulo_input_meta, rotulo_btn_cadastro_meta, rotulo_lista_metas } from './mensagens';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View>
        <TextInput style={styles.inputText} placeholder={rotulo_input_meta}/>
      </View>
      <View>
        <Button title={rotulo_btn_cadastro_meta}/>
      </View>
      <View>
        <Text>{rotulo_lista_metas}</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  mainContainer: {
    padding: 30,
  },

  TextInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
  },

});