import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CardMensagem from './componentes/CardMensagem'
import api from './services/api';

export default function App() {

  const [produtos, setProd] = useState([]);

  useEffect(() => {
    api.get('List').then(({ data }) => {
      setProd(data)
    });
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Meu Primeiro APP REACT!</Text>

      {produtos.map(item =>
      (
        <CardMensagem key={item.Codigo} descricao={item.Descricao} />
      ))}

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
  },
  titulo:
  {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  }
});
