import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, TouchableHighlight } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fb_user_id: ""
    }
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
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync("1622588997802973", {
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
      this.setState({ fb_user_id: (await response.json()).id })
      this.props.login(this.state)
        .then(
          () => navigator.navigate('map'),
          () => this.props.signup(this.state)
        )
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
          <Text style={styles.title}>SHOW ME YOUR MOVES</Text>
          <View style={styles.buttonsContainer}>
            <TouchableHighlight
              underlayColor="#99d9f4"
              onPress={this.logInWithFB.bind(this)}>
              <View style={styles.fbButtonContainer}>
                <FontAwesome name="facebook" color="white" size={25}/>
                <Text style={styles.buttonText}>Continue with Facebook</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#99d9f4"
              onPress={this.logInWithGoogle.bind(this)}>
              <View style={styles.googleButtonContainer}>
                <Entypo name="google-" color="white" size={25}/>
                <Text style={styles.buttonText}>Continue with Google</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.regularLogin}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>or</Text>
              <Text style={styles.text}>Log in or sign up with email</Text>
            </View>
            <View style={styles.regularLoginButtons}>
              <Button
                onPress={() => this.props.navigation.navigate('RegularLogin')}
                title="Log In"/>
              <Button
                title="Sign Up"/>
            </View>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#210c56',
    flex: 1
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
    backgroundColor: "transparent"
  },
  buttonsContainer: {
    // alignItems: "center"
  },
  regularLogin: {
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 25
  },
  textContainer: {
    alignItems: "center",
    backgroundColor: "transparent"
  },
  fbButtonContainer: {
    // flex: 1,
    flexDirection: "row",
    // alignItems: "center",
    backgroundColor: "#3b5998",
    paddingVertical: 7,
    paddingHorizontal: 2,
    borderRadius: 5,
    // justifyContent: "center",
    marginBottom: 18,
    width: 50
  },
  googleButtonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DD4835",
    paddingVertical: 7,
    paddingHorizontal: 2,
    borderRadius: 5,
    justifyContent: "center",
    marginBottom: 10,
    width: 50
  },
  buttonText: {
    fontSize: 18,
    color: "#FAFAFA",
    marginLeft: 10,
    marginTop: 2,
  },
  regularLoginButtons: {
    flexDirection: "row",
    backgroundColor: "transparent"
  },
  touchableHighlight: {
    alignItems: "center"
  }
})

export default LoginPage;
