import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

interface avatarProps {
  name: String;
}

const Avatar = ({ name = 'Nolan' }: avatarProps) => {
  const firstLetterOfName = (name: String) => {
    const firstLetter = name.slice(0, 1);
    return firstLetter.toUpperCase();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{firstLetterOfName(name)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bebebe',
    color: '#000',
    borderRadius: 100 / 2,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});

export default Avatar;
