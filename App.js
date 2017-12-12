import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './frontend/components/login_page.js';
import Map from "./frontend/components/map";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Marth is a nerd..</Text>
        <LoginPage/>
      </View>
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
