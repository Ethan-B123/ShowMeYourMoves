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
      <View style={styles.container}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
          >
            <Image
              style={{flex: 1, resizeMode: 'stretch'}}
              source={{uri: 'https://res.cloudinary.com/lara-cloud1/image/upload/v1513193501/background_image_jopmxv.png'}}
            />
          </View>
          <KeyboardAvoidingView behavior="padding" style={styles.form}>
            <TextInput
              onChangeText={(val) => this.setState({email: val})}
              placeholder="Email"
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}/>
            <TextInput
              onChangeText={(val) => this.setState({password: val})}
              placeholder="Password"
              secureTextEntry
              returnKeyType="go"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              ref={(input) => this.passwordInput = input}
              style={styles.input}/>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => this.props.register(this.state)}>
                <Text style={styles.buttonText}>SIGN UP</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  form: {
    padding: 20,
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
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF'
  }
})

export default RegularLoginPage;
