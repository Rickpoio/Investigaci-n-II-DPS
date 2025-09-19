import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Card({ item, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress(item)} style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text numberOfLines={2} style={styles.desc}>{item.description}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginVertical: 8,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 12
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 6
  },
  desc: {
    fontSize: 14,
    color: '#555'
  }
});
