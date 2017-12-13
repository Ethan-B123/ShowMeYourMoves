import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginPageContainer from '../components/login_page_container';
import RegularLoginPage from '../components/regular_login';

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginPageContainer,
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
