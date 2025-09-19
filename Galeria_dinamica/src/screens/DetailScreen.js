import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Header from '../componentes/Header';

export default function DetailScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <Header title={item.title} />
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 10
  },
  desc: {
    fontSize: 16,
    marginHorizontal: 10
  }
});
