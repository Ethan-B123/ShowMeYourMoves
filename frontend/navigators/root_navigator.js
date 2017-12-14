import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginPageContainer from '../components/login_page_container';
import RegularLoginPageContainer from '../components/regular_login_container';
import RegularSignupPageContainer from '../components/regular_signup_container';

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginPageContainer,
    navigationOptions: {
      headerTitle: 'login',
    },
  },
  RegularLogin: {
    screen: RegularLoginPageContainer,
    navigationOptions: {
      headerTitle: 'regular-login',
    },
  },
  RegularSignup: {
    screen: RegularSignupPageContainer,
    navigationOptions: {
      headerTitle: 'regular-signup',
    },
  }
});

export default RootNavigator;
