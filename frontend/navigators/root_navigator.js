import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginPageContainer from '../components/login_page_container';
import RegularLoginPageContainer from '../components/regular_login_container';
import RegularSignupPageContainer from '../components/regular_signup_container';
import MapShowPage from "../components/maps/map_show_container";
import UserDetail from "../components/maps/user_detail"

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
  },
  ActivityMap: {
    screen: MapShowPage,
    navigationOptions: {
      headerTitle: 'Activity Map',
    },
  },
  UserDetail: {
    screen: UserDetail,
    navigationOptions: {
      headerTitle: 'UserDetail',
    },
  }
});

export default RootNavigator;
