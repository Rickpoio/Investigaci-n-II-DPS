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
     <Text style={styles.title}>{item.tipodesc}</Text>
        
         <View style={{ flexDirection: "row", marginTop: 8 }}>
          <Image source={{ uri: item.tipo }} style={styles.tipo} />
              <Image source={{ uri: item.tipo2 }} style={styles.tipo} />
    </View>

      </View>
    
    );
    
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250
  },
    tipo: {
    width: 100,
    height: 20
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
