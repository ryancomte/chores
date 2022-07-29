import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface buttonProps {
  onPress: () => void;
  text: string;
  type?: string;
  bgColor?: string;
  fgColor?: string;
}

const CustomButton = ({
  onPress,
  type = 'PRIMARY',
  text,
  bgColor,
  fgColor,
}: buttonProps) => (
  <Pressable
    onPress={onPress}
    style={[
      styles.container,
      styles[`container_${type}`],
      bgColor ? { backgroundColor: bgColor } : {},
    ]}
  >
    <Text
      style={[
        styles.text,
        styles[`text_${type}`],
        fgColor ? { color: fgColor } : {},
      ]}
    >
      {text}
    </Text>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 5,
    padding: 15,

    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: '#3b71f3',
  },
  container_TERTIARY: {},
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_TERTIARY: {
    color: 'gray',
  },
});

export default CustomButton;
