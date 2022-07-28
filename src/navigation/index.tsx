import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import { ViewFamilyMembers } from '../screens/FamilyMembers';

const Stack = createNativeStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Family Members"
        component={ViewFamilyMembers}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
