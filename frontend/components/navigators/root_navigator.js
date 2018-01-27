import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import LoginPageContainer from '../login_page_container';
import RegularLoginPageContainer from '../regular_login_container';
import RegularSignupPageContainer from '../regular_signup_container';
import MapShowPage from "../maps/map_show_container";
import UserDetail from "../maps/user_detail_container";
import EventDetail from "../maps/event_detail_container";
import AddSeekingForm from "../maps/add_seeking_container";
import AddHostingForm from "../maps/add_hosting_container";
import HamburgerMenu from "../hamburger_menu";
import SideBarContentContainer from "./sidebar_content_container";
import UserSettingsContainer from '../user_settings_container';

const MainAppStack = StackNavigator({
  UserDetail: {
    screen: UserDetail,
    navigationOptions: ({navigation}) => ({
      headerTitle: navigation.state.params.name,
    }),
  },
  EventDetail: {
    screen: EventDetail,
    navigationOptions: ({navigation}) => ({
      headerTitle: navigation.state.params.name,
    }),
  },
  AddSeekingForm: {
    screen: AddSeekingForm,
    navigationOptions: {
      headerTitle: 'Put Yourself on the Map',
    },
  },
  AddHostingForm: {
    screen: AddHostingForm,
    navigationOptions: {
      headerTitle: 'Host an Event',
    },
  },
  ActivityMap: {
    screen: MapShowPage,
    navigationOptions: {
      headerTitle: 'Activity Map',
    },
  },
  UserSettings: {
    screen: UserSettingsContainer,
    navigationOptions: {
      headerTitle: 'User Settings'
    }
  }
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
});

const SideBar = DrawerNavigator({
  ActivityMap: {
    screen: MainAppStack,
    navigationOptions: {
      title: "Activity Map"
    }
  }
},
{
  initialRouteName: "ActivityMap",
  drawerBackgroundColor: "#27033E",
  contentComponent: SideBarContentContainer,
  contentOptions: {
    activeTintColor: "#FFF"
  }
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
