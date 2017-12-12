import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './frontend/components/login_page.js';
import RootNavigator from './frontend/navigators/root_navigator';

export default class App extends React.Component {
  // renderScene(route, navigator) {
  //   switch(route.id) {
  //     case "login-page":
  //       return (
  //         <LoginPage navigator={navigator}/>
  //       )
  //   }
  // }

  render() {
    return (
      <RootNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#210c56',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: "#fff",
  }
});
