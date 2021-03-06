import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fb_user_id: null,
      google_user_id: null
    }
  }

  async logInWithGoogle() {
    try {
      const { type, accessToken } = await Expo.Google.logInAsync({
        androidClientId: "860639452597-qdkr4j4k22b9vv2r739r9ucgj2l0o8vd.apps.googleusercontent.com",
        iosClientId: "860639452597-rknoe79r58di8fe5qgos5jjnsoug5jne.apps.googleusercontent.com",
        iosStandaloneAppClientId: "860639452597-kv99q03ue2hukf63bri83h33j9fdtmio.apps.googleusercontent.com",
        scopes: ['profile', 'email'],
      });

      if (type === 'success') {
        const userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
          headers: { Authorization: `Bearer ${accessToken}`},
        });
        const jResponse = await userInfoResponse.json();
        Alert.alert(
          'Logged in!',
          `Hi ${jResponse.given_name}!`,
        );

        const navigateToMap = () => this.props.navigation.navigate('Main');
        const navigateToUserSettings = () => this.props.navigation.navigate('UserSettings');
        const register = () => this.props.register(this.state, navigateToUserSettings);

        this.setState({
          google_user_id: jResponse.id,
          fb_user_id: null
         },
          () => this.props.login(this.state, navigateToMap, register)
        )
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
      const jResponse = await response.json()
      Alert.alert(
        'Logged in!',
        `Hi ${jResponse.name}!`,
      );

      const navigateToMap = () => this.props.navigation.navigate('Main');
      const navigateToUserSettings = () => this.props.navigation.navigate('UserSettings');
      const register = () => this.props.register(this.state, navigateToUserSettings);

      this.setState({
        fb_user_id: jResponse.id,
        google_user_id: null
       },
        () => this.props.login(this.state, navigateToMap, register)
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
          <Image
            style={styles.title}
            source={{uri: "https://res.cloudinary.com/dezmnl5mf/image/upload/v1513200646/Title_mlaxn5.png"}}
          />
          {/* <Text style={styles.title}>SHOW ME YOUR MOVES</Text> */}
          <View style={styles.buttonsContainer}>
            <TouchableHighlight
              style={styles.fbButtonContainer}
              underlayColor="#99d9f4"
              onPress={this.logInWithFB.bind(this)}>
              <View style={{flexDirection: "row"}}>
                <FontAwesome name="facebook" color="white" size={25}/>
                <Text style={styles.buttonText}>Continue with Facebook</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.googleButtonContainer}
              underlayColor="#99d9f4"
              onPress={this.logInWithGoogle.bind(this)}>
              <View style={{flexDirection: "row"}}>
                <Entypo name="google-" color="white" size={25}/>
                <Text style={styles.buttonText}>Continue with Google</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.regularLogin}>
            <View style={styles.textContainer}>
              <Text style={{color: "#FFF", fontSize: 25}}>or</Text>
              <Text style={styles.text}>Log in or sign up with email</Text>
            </View>
            <View style={styles.regularLoginButtons}>
              <TouchableOpacity
                style={styles.regularLoginButton}
                onPress={() => this.props.navigation.navigate('RegularLogin')}>
                <Text style={styles.regularLoginButtonText}>Log In</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.regularLoginButton}
                onPress={() => this.props.navigation.navigate('RegularSignup')}>
                <Text style={styles.regularLoginButtonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    height: 100,
    resizeMode: 'contain',
    marginVertical: 40,
    marginHorizontal: 20
    // fontSize: 40,
    // textAlign: "center",
    // marginBottom: 30,
    // marginTop: 40,
    // marginLeft: 20,
    // marginRight: 20,
    // color: "#fff",
    // backgroundColor: "transparent"
  },
  buttonsContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  regularLogin: {
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18
  },
  textContainer: {
    alignItems: "center",
    backgroundColor: "transparent"
  },
  fbButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3b5998",
    paddingVertical: 10,
    paddingHorizontal: 2,
    borderRadius: 5,
    justifyContent: "center",
    marginBottom: 18,
    width: 340
  },
  googleButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DD4835",
    paddingVertical: 10,
    paddingHorizontal: 2,
    borderRadius: 5,
    justifyContent: "center",
    marginBottom: 18,
    width: 340
  },
  buttonText: {
    fontSize: 18,
    color: "#FAFAFA",
    marginLeft: 10,
    marginTop: 2
  },
  regularLoginButton: {
    borderWidth: 2,
    borderColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: 140
  },
  regularLoginButtonText: {
    color: "#FFF",
    fontSize: 20,
    textAlign: "center"
  },
  regularLoginButtons: {
    flexDirection: "row",
    backgroundColor: "transparent",
    marginTop: 25,
    justifyContent: "space-between",
    width: 340
  },
  touchableHighlight: {
    alignItems: "center"
  }
})

export default LoginPage;
