import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

// Importações de arquivos locais
import { titulo } from './util';
import titulo_padrao from './util';
import { 
  rotulo_input_meta, 
  rotulo_btn_cadastro_meta, 
  rotulo_lista_metas 
} from './mensagens';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Seção das Metas (Substituindo HTML por React Native) */}
      <Text style={styles.header}>{rotulo_lista_metas}</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder={rotulo_input_meta} 
      />
      
      <Button 
        title={rotulo_btn_cadastro_meta} 
        onPress={() => alert('Meta Adicionada!')} 
      />

      <View style={styles.mainContainer} />


      {/* Seção Original do seu App */}
      <Text>{titulo}</Text>
      <Text style={{ margin: 20 }}>{titulo_padrao}</Text>
      <Text style={styles.text}>AAA</Text>
      
      <Button 
        title="Clique aqui" 
        onPress={() => alert('Botão clicado!')} 
      />
      
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  text: {
    margin: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    width: '100%',
    marginVertical: 20,
  }
});