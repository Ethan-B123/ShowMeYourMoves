import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  async logInWithGoogle() {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: "860639452597-qdkr4j4k22b9vv2r739r9ucgj2l0o8vd.apps.googleusercontent.com",
        iosClientId: "860639452597-rknoe79r58di8fe5qgos5jjnsoug5jne.apps.googleusercontent.com",
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        return result.accessToken;
      } else {
        return {cancelled: true};
      }
    } catch(e) {
      return {error: true};
    }
  }

  async logInWithFB() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('1622588997802973', {
        permissions: ['public_profile'],
      });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
      );
  }
}

  render() {
    return (
      <View>
        <Button
          title="Log in with Facebook"
          onPress={this.logInWithFB.bind(this)}/>
        <Button
          title="Log in with Google"
          onPress={this.logInWithGoogle.bind(this)}/>
      </View>
    )
  }
}

export default LoginPage;
