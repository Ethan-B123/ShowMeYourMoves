import React from 'react';
import { StyleSheet, 
  TextInput, 
  Text, 
  View, 
  Button, 
  Alert, 
  Image, 
  TouchableHighlight, 
  TouchableOpacity, 
  KeyboardAvoidingView } from 'react-native';
import { StackNavigator } from 'react-navigation';

class UserSettings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display_name: props.display_name,
      email: props.email,
      description: props.description,
      game: props.game,
      main: props.main,
      pronouns: props.pronouns,
      age: props.age
    };
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
            style={{ flex: 1, resizeMode: 'stretch' }}
            source={{ uri: 'https://res.cloudinary.com/lara-cloud1/image/upload/v1513193501/background_image_jopmxv.png' }}
          />
        </View>
        <KeyboardAvoidingView behavior="position" style={styles.form} keyboardVerticalOffset={70}>
          <TextInput
            onChangeText={(val) => this.setState({ email: val })}
            placeholder="Email"
            placeholderTextColor="#4C4C50"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input} />
          <TextInput
            onChangeText={(val) => this.setState({ password: val })}
            placeholder="Password"
            placeholderTextColor="#4C4C50"
            secureTextEntry
            returnKeyType="go"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            ref={(input) => this.passwordInput = input}
            style={styles.input} />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.register(this.state)}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  form: {
    padding: 20,
  },
  input: {
    height: 50,
    backgroundColor: "transparent",
    marginBottom: 18,
    color: "#FFF",
    borderRadius: 5,
    paddingHorizontal: 15,
    borderColor: "#FFF",
    borderWidth: 1,
    fontSize: 20
  },
  buttonContainer: {
    marginTop: 30,
    borderWidth: 2,
    borderColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5
  },
  buttonText: {
    backgroundColor: "transparent",
    color: "#FFF",
    fontSize: 20,
    textAlign: "center"
  }
});

export default UserSettings;