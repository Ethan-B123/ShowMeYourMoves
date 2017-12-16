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
  ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';

class UserSettings extends React.Component {
  constructor(props) {
    super(props);

    //TESTING VALUES, REMOVE AND UNCOMMENT CODE BELOW WHEN DONE
    this.state = {
      display_name: "IntermediateSteve",
      email: "steveo@gmail.com",
      description: "This is a description",
      game: "Melee",
      main: "Falco",
      pronouns: "he/him/his",
      age: 41
    };
    //TESTING VALUES, REMOVE AND UNCOMMENT CODE BELOW WHEN DONE

    // this.state = {
    //   display_name: props.display_name,
    //   email: props.email,
    //   description: props.description,
    //   game: props.game,
    //   main: props.main,
    //   pronouns: props.pronouns,
    //   age: props.age
    // };
    this.removeNonNum = this.removeNonNum.bind(this);
  }

  removeNonNum(str) {
    let noNum = str.replace(/\D/g, '');
    if (noNum === '') {
      noNum = '0';
    }
    return parseInt(noNum);
  }

  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        {/* <View
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
        </View> */}
        <KeyboardAvoidingView behavior="position" style={styles.form} keyboardVerticalOffset={70}>
          
          <Text style={styles.formText}>Email</Text>
          <TextInput
            onChangeText={(val) => this.setState({ email: val })}
            value={this.state.email}
            placeholder="Email"
            placeholderTextColor="#4C4C50"
            returnKeyType="next"
            onSubmitEditing={() => this.displayNameInput.focus()}
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
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={() => this.descriptionInput.focus()}
            ref={(input) => this.displayNameInput = input}
            style={styles.input} />
          <Text style={styles.formText}>About Me</Text>
          <TextInput
            onChangeText={(val) => this.setState({ description: val })}
            value={this.state.description}
            placeholder="About Me"
            placeholderTextColor="#4C4C50"
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={() => this.gameInput.focus()}
            ref={(input) => this.descriptionInput = input}
            style={styles.input} />
          <Text style={styles.formText}>Game</Text>
          <TextInput
            onChangeText={(val) => this.setState({ game: val })}
            value={this.state.game}
            placeholder="Game"
            placeholderTextColor="#4C4C50"
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={() => this.pronounsInput.focus()}
            ref={(input) => this.gameInput = input}
            style={styles.input} />
          <Text style={styles.formText}>Pronouns</Text>
          <TextInput
            onChangeText={(val) => this.setState({ pronouns: val })}
            value={this.state.pronouns}
            placeholder="Pronouns"
            placeholderTextColor="#4C4C50"
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={() => this.ageInput.focus()}
            ref={(input) => this.pronounsInput = input}
            style={styles.input} />
          <Text style={styles.formText}>Age</Text>
          <TextInput
            onChangeText={(val) => this.setState({ age: this.removeNonNum(val) })}
            onSubmitEditing={() => this.props.update(this.state)}
            value={this.state.age.toString()}
            placeholder="Age"
            placeholderTextColor="#4C4C50"
            keyboardType="numeric"
            returnKeyType="done"
            autoCapitalize="none"
            autoCorrect={false}
            ref={(input) => this.ageInput = input}
            style={styles.input} />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.update(this.state)}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#210c56"
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
