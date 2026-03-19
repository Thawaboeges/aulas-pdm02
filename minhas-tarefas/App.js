import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button, 
  ScrollView 
} from 'react-native';

// --- COMPONENTE: MetaItem ---
// Este componente recebe o texto via props e estiliza cada item da lista
function MetaItem(props) {
  return (
    <View style={styles.metaItem}>
      <Text style={styles.metaText}>{props.text}</Text>
    </View>
  );
}

// --- COMPONENTE: MetaInput ---
// Este componente gere o seu próprio estado interno para o texto do input
function MetaInput(props) {
  const [enteredMetaText, setEnteredMetaText] = useState('');

  function metaInputHandler(enteredText) {
    setEnteredMetaText(enteredText);
  }

  function addMetaHandler() {
    // Chama a função passada pelo pai (App) via props
    props.onAddMeta(enteredMetaText);
    setEnteredMetaText(''); // Limpa o campo após adicionar
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Sua meta acadêmica"
        onChangeText={metaInputHandler}
        value={enteredMetaText}
      />
      <Button title="Adicionar Meta" onPress={addMetaHandler} />
    </View>
  );
}

// --- COMPONENTE PRINCIPAL: App ---
export default function App() {
  const [courseMetas, setCourseMetas] = useState([]);

  // Função para atualizar a lista usando o Operador Spread (...)
  function addMetaHandler(enteredText) {
    if (enteredText.trim().length === 0) return; // Evita adicionar metas vazias
    
    setCourseMetas((currentMetas) => [
      ...currentMetas,
      { id: Math.random().toString(), text: enteredText },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      
      {/* Componentização: Chamada do Input */}
      <MetaInput onAddMeta={addMetaHandler} />

      <View style={styles.goalsContainer}>
        {/* ScrollView: Permite rolar a lista quando houver muitos itens */}
        <ScrollView>
          {/* Renderização Dinâmica: Uso do .map() para listar as metas */}
          {courseMetas.map((goal) => (
            <MetaItem key={goal.id} text={goal.text} />
          ))}
        </ScrollView>
      </View>
      
    </View>
  );
}

// --- ESTILOS ---
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingBottom: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  metaItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc', // Cor roxa definida nos slides
  },
  metaText: {
    color: 'white',
  },
});