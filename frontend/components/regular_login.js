import React from 'react';
import { StyleSheet, TextInput, Text, View, Button, Alert, Image, TouchableHighlight, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { StackNavigator } from 'react-navigation';

class RegularLoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          onChangeText={(val) => this.setState({email: val})}
          placeholder="Email"
          style={styles.input}/>
        <TextInput
          onChangeText={(val) => this.setState({password: val})}
          placeholder="Password"
          secureTextEntry
          style={styles.input}/>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.login(this.state)}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
    marginBottom: 20,
    color: "#FFF",
    paddingHorizontal: 10
  },
  buttonsContainer: {
    paddingVertical: 15
  }
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF'
  }
})

export default RegularLoginPage;
