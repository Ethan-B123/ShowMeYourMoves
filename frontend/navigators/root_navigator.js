import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginPage from '../components/login_page';
import RegularLoginPage from '../components/regular_login';

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginPage,
    navigationOptions: {
      headerTitle: 'login',
    },
  },
  RegularLogin: {
    screen: RegularLoginPage,
    navigationOptions: {
      headerTitle: 'regular-login',
    },
  }
});

export default RootNavigator;
