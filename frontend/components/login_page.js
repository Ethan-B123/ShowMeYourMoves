import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  async logInFB() {
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
      <Button
        title="Login with FB"
        onPress={this.logInFB.bind(this)}/>
    )
  }
}

export default LoginPage;
