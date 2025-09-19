import React from 'react';
import { FlatList } from 'react-native';
import Card from './Card';

export default function List({ data, onSelect }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Card item={item} onPress={onSelect} />}
      showsVerticalScrollIndicator={false}
    />
  );
}
