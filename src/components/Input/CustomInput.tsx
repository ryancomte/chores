import React, { Dispatch } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface inputProps {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
}

const Input = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
}: inputProps) => (
  <View style={styles.container}>
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={setValue}
      style={styles.input}
      secureTextEntry={secureTextEntry}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    marginVertical: 5,
  },
  input: { padding: 10 },
});

export default Input;
