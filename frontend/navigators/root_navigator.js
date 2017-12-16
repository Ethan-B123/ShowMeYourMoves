import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginPageContainer from '../components/login_page_container';
import RegularLoginPageContainer from '../components/regular_login_container';
import RegularSignupPageContainer from '../components/regular_signup_container';
import MapShowPage from "../components/maps/map_show_container";
import UserDetail from "../components/maps/user_detail"
import MapActionNavigator from "../components/maps/map_action_navigator";

const RootNavigator = StackNavigator({
ActivityMap: {
  screen: MapShowPage,
  navigationOptions: {
    headerTitle: 'Activity Map',
  },
},
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
  UserDetail: {
    screen: UserDetail,
    navigationOptions: {
      headerTitle: 'UserDetail',
    },
  },
  MapActionNavigator: {
    screen: MapActionNavigator,
    navigationOptions: {
      headerTitle: 'Map Action Navigator',
    },
  },
});

export default RootNavigator;
