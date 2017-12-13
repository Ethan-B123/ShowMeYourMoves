import React from 'react';
import { StyleSheet, TextInput, Text, View, Button, Alert, Image, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';

class RegularLoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
      </View>
    )
  }
}

export styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.7)",
    marginBottom: 20
  }
})

export default RegularLoginPage;
