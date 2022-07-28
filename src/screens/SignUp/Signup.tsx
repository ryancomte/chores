import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordRepeat, setPasswordRepeat] = useState<string>('');

  const onSigninPressed = () => {
    console.warn('signin pressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles.root}>
        <CustomInput
          placeholder="Username"
          setValue={setUsername}
          value={username}
        />
        <CustomInput placeholder="email" setValue={setEmail} value={email} />
        <CustomInput
          placeholder="Password"
          setValue={setPassword}
          value={password}
          secureTextEntry
        />
        <CustomInput
          placeholder="Repeat Password"
          setValue={setPassword}
          value={password}
          secureTextEntry
        />
        <CustomButton onPress={onSigninPressed} text="Sign In" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: { alignItems: 'center', justifyContent: 'center', padding: 20 },
});

export default Login;
