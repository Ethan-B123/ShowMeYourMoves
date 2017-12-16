import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginPageContainer from '../login_page_container';
import RegularLoginPageContainer from '../regular_login_container';
import RegularSignupPageContainer from '../regular_signup_container';
import MapShowPage from "../maps/map_show_container";
import UserDetail from "../maps/user_detail"
import MapActionNavigator from "../maps/map_action_navigator";

const headerStyle = {
  backgroundColor: "#27033E",
}

const headerTitleStyle = {
  color: "#FFF",
  fontSize: 24
}

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginPageContainer,
    navigationOptions: {
      headerTitle: 'Log In',
      headerStyle: headerStyle,
      headerTitleStyle: headerTitleStyle
    },
  },
  RegularLogin: {
    screen: RegularLoginPageContainer,
    navigationOptions: {
      headerTitle: 'regular-login',
      headerStyle: headerStyle,
      headerTitleStyle: headerTitleStyle
    },
  },
  RegularSignup: {
    screen: RegularSignupPageContainer,
    navigationOptions: {
      headerTitle: 'regular-signup',
      headerStyle: headerStyle,
      headerTitleStyle: headerTitleStyle
    },
  },
  UserDetail: {
    screen: UserDetail,
    navigationOptions: {
      headerTitle: 'UserDetail',
      headerStyle: headerStyle,
      headerTitleStyle: headerTitleStyle
    },
  },
  MapActionNavigator: {
    screen: MapActionNavigator,
    navigationOptions: {
      headerTitle: 'Map Action Navigator',
      headerStyle: headerStyle,
      headerTitleStyle: headerTitleStyle
    },
  },
  ActivityMap: {
    screen: MapShowPage,
    navigationOptions: {
      headerTitle: 'Activity Map',
      headerStyle: headerStyle,
      headerTitleStyle: headerTitleStyle
    },
  },
},
{

});

export default RootNavigator;
