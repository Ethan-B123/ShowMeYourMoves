import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginPage from '../components/login_page';

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginPage,
  }
});

export default RootNavigator;
