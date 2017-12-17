import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import LoginPageContainer from '../login_page_container';
import RegularLoginPageContainer from '../regular_login_container';
import RegularSignupPageContainer from '../regular_signup_container';
import MapShowPage from "../maps/map_show_container";
import UserDetail from "../maps/user_detail"
import MapActionNavigator from "../maps/map_action_navigator";
import HamburgerMenu from "../hamburger_menu";

const MainAppStack = StackNavigator({
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
  initialRouteName: "ActivityMap",
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#27033E"
    },
    headerTitleStyle: {
      color: "#FFF",
      fontSize: 24
    },
    headerBackTitle: null,
    headerTintColor: "#FFF",
    headerLeft: <HamburgerMenu navigation={navigation}/>
  })
})

const SideBar = DrawerNavigator({
  ActivityMap: { screen: MainAppStack }
},
{
  initialRouteName: "ActivityMap",
  drawerBackgroundColor: "#27033E"
})

const SignUpStack = StackNavigator({
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
  Main: {
    screen: SideBar
  }
},
{
  initialRouteName: "Login",
  headerMode: "none"
  // navigationOptions: {
  //   headerStyle: {
  //     backgroundColor: "#27033E"
  //   },
  //   headerTitleStyle: {
  //     color: "#FFF",
  //     fontSize: 24
  //   },
  //   headerBackTitle: null,
  //   headerTintColor: "#FFF"
  // }
});

export default SignUpStack;
