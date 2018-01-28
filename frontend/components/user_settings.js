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
  KeyboardAvoidingView,
  ScrollView,
  NavigationActions
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class UserSettings extends React.Component {
  constructor(props) {
    super(props);

    let age;

    if(!props.age) {
      age = 0;
    } else {
      age = props.age;
    }

    this.state = {
      display_name: props.display_name,
      email: props.email,
      description: props.description,
      game: props.game,
      main: props.main,
      pronouns: props.pronouns,
      age: age,
      image_url: props.image_url,
      id: props.id,
      contact_info: props.contact_info
    };
    this.removeNonNum = this.removeNonNum.bind(this);
    this.backAction = this.backAction.bind(this);
  }

  removeNonNum(str) {
    let noNum = str.replace(/\D/g, '');
    if (noNum === '') {
      noNum = '0';
    }
    return parseInt(noNum);
  }

  backAction(){ 
    NavigationActions.back({
    key: 'Init-id-1513496578960-0'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="position" style={styles.form} keyboardVerticalOffset={-50}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <Image
            style={styles.image}
            source={{ uri: this.state.image_url }}
          />
          <Text style={styles.formText}>Email</Text>
          <TextInput
            onChangeText={(val) => this.setState({ email: val })}
            value={this.state.email}
            placeholder="Email"
            placeholderTextColor="#4C4C50"
            returnKeyType="done"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input} />
          <Text style={styles.formText}>Display Name</Text>
          <TextInput
            onChangeText={(val) => this.setState({ display_name: val })}
            value={this.state.display_name}
            placeholder="Display Name"
            placeholderTextColor="#4C4C50"
            returnKeyType="done"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input} />
          <Text style={styles.formText}>Contact Info</Text>
          <TextInput
            onChangeText={(val) => this.setState({ contact_info: val })}
            value={this.state.contact_info}
            placeholder="Contact Info"
            placeholderTextColor="#4C4C50"
            returnKeyType="done"
            autoCorrect={false}
            style={styles.input} />
          <Text style={styles.formText}>About Me</Text>
          <TextInput
            onChangeText={(val) => this.setState({ description: val })}
            value={this.state.description}
            placeholder="About Me"
            placeholderTextColor="#4C4C50"
            returnKeyType="done"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input} />
          <Text style={styles.formText}>Game</Text>
          <TextInput
            onChangeText={(val) => this.setState({ game: val })}
            value={this.state.game}
            placeholder="Game"
            placeholderTextColor="#4C4C50"
            returnKeyType="done"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input} />
          <Text style={styles.formText}>Pronouns</Text>
          <TextInput
            onChangeText={(val) => this.setState({ pronouns: val })}
            value={this.state.pronouns}
            placeholder="Pronouns"
            placeholderTextColor="#4C4C50"
            returnKeyType="done"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input} />
          <Text style={styles.formText}>Age</Text>
          <TextInput
            onChangeText={(val) => this.setState({ age: this.removeNonNum(val) })}
            value={this.state.age.toString()}
            placeholder="Age"
            placeholderTextColor="#4C4C50"
            keyboardType="numeric"
            returnKeyType="done"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input} />
          <Text style={styles.formText}>Image Url</Text>
          <TextInput
            onChangeText={(val) => this.setState({ image_url: val })}
            value={this.state.image_url}
            placeholder="Image Url"
            placeholderTextColor="#4C4C50"
            returnKeyType="done"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input} />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.update(this.state).then(() => {
              this.props.navigation.navigate("ActivityMap");
            })}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.logout().then(() => {
              this.props.navigation.navigate("Login");
            })}>
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
        </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#27033E"
  },
  image: {
    width: 150, 
    height: 150, 
    borderRadius: 75,
    flex: 1,
    alignSelf: "center",
    padding: 40
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
  }, 
  formText: {
    backgroundColor: "transparent",
    color: "#FFF",
    fontSize: 20,
    textAlign: "left"
  }
});

export default UserSettings;
