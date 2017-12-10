import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Marth is a nerd.</Text>
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
