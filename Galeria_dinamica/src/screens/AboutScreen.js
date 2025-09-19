import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../componentes/Header';

export default function AboutScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Acerca de" />
      <View style={styles.container}>
        <Text style={styles.text}>Esta es una app de ejemplo creada con React Native.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16
  }
});
