import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import Avatar from '../Avatar';

interface TileProps {
  size: String;
  name: String;
}

const navigation = useNavigation();

const Tile = ({ name, size }: TileProps) => {
  return (
    <View>
      <Avatar name={name} size={size} />
      <Text>{name}</Text>
      <Pressable onPress={() => {}}>
        <Icon name="chevron-right" size={30} color="#900" />
      </Pressable>
    </View>
  );
};

export default Tile;
