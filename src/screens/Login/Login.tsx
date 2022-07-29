import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigation = useNavigation();

  const onSigninPressed = () => {
    console.warn('signin pressed');
    navigation.navigate('Family Members');
  };

  const onForgotPasswordPressed = () => {
    console.warn('forgot password pressed');
  };

  const onSignInFacebook = () => {
    console.warn('Sign in Facebook');
  };
  const onSignInGoogle = () => {
    console.warn('Sign in Google');
  };
  const onSignInApple = () => {
    console.warn('Sign in Apple');
  };
  const onSignUpPressed = () => {
    console.warn('Sign up for account');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles.root}>
        <Input placeholder="username" setValue={setUsername} value={username} />
        <Input
          placeholder="password"
          setValue={setPassword}
          value={password}
          secureTextEntry
        />
        <Button onPress={onSigninPressed} text="Sign In" />
        <Button
          onPress={onForgotPasswordPressed}
          text="Forgot password?"
          type="TERTIARY"
        />
        <Button
          onPress={onSignInFacebook}
          text="Sign In with Facebook"
          bgColor="#e7eaf4"
          fgColor="#4765A9"
        />
        <Button
          onPress={onSignInGoogle}
          text="Sign In with Google"
          bgColor="#fae9ea"
          fgColor="#dd4d44"
        />
        <Button
          onPress={onSignInApple}
          text="Sign In with Apple"
          bgColor="#e3e3e3"
          fgColor="#363636"
        />

        <Button
          onPress={onSignUpPressed}
          text="Don't have an account? Create one"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: { alignItems: 'center', justifyContent: 'center', padding: 20 },
});

export default Login;
