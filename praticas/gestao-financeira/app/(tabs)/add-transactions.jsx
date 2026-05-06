import {
  View,
  ScrollView,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { globalStyles } from "../../styles/globalStyles.js";
import Button from "../../components/Button.jsx";
import { useContext, useRef, useState } from "react";
import DescriptionInput from "../../components/DescriptionInput.jsx";
import CurrencyInput from "../../components/CurrencyInput.jsx";
import DatePicker from "../../components/DatePicker.jsx";
import CategoryPicker from "../../components/CategoryPicker.jsx";
import { MoneyContext } from "../../contexts/GlobalState.jsx"
import AsyncStorage from "@react-native-async-storage/async-storage"

const initialForm = {
  description: "",
  value: 0,
  date: new Date(),
  category: "Renda",
};

export default function AddTransactions() {
  const [form, setForm] = useState(initialForm);
  const valueInputRef = useRef();
  
  const [transactions, setTransactions] = useContext(MoneyContext); 
  
  const setAsyncStorage = async (data) => {
    try {
      await AsyncStorage.setItem("transactions", JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  };

  const addTransaction = async () => {
    const newTransaction = { id: transactions.length + 1, ...form };
    const updatedTransactions = [...transactions, newTransaction];

    setTransactions(updatedTransactions);
    setForm(initialForm);
    await setAsyncStorage(updatedTransactions);

    Alert.alert("Transação adicionada com sucesso!");
  };

  return (
    <KeyboardAvoidingView style={globalStyles.screenContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={globalStyles.content}>
          <View style={styles.form}>
            <DescriptionInput
              form={form}
              setForm={setForm}
              valueInputRef={valueInputRef}
            />
            <CurrencyInput form={form} setForm={setForm} valueInputRef={valueInputRef} />
            <DatePicker form={form} setForm={setForm} />
            <CategoryPicker form={form} setForm={setForm} />
          </View>
          <Button onPress={addTransaction}>Adicionar</Button>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  form: {
    gap: 12,
    marginBottom: 40,
    marginTop: 10,
  },
});