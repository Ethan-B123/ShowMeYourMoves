import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginPageContainer from '../login_page_container';
import RegularLoginPageContainer from '../regular_login_container';
import RegularSignupPageContainer from '../regular_signup_container';
import MapShowPage from "../maps/map_show_container";
import UserDetail from "../maps/user_detail"
import MapActionNavigator from "../maps/map_action_navigator";

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginPageContainer,
    navigationOptions: {
      headerTitle: 'Log In',
    },
  },
  RegularLogin: {
    screen: RegularLoginPageContainer,
    navigationOptions: {
      headerTitle: 'Log In',
    },
  },
  RegularSignup: {
    screen: RegularSignupPageContainer,
    navigationOptions: {
      headerTitle: 'Sign Up',
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
  ActivityMap: {
    screen: MapShowPage,
    navigationOptions: {
      headerTitle: 'Activity Map',
    },
  },
},
{
  navigationOptions: {
    headerStyle: {
      backgroundColor: "#27033E"
    },
    headerTitleStyle: {
      color: "#FFF",
      fontSize: 24
    },
    headerBackTitle: null
  }
});

export default RootNavigator;
