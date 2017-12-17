import React, { Component } from "react";
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
import DatePicker from 'react-native-datepicker'

class AddHostingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      event_name: "Smash Event",
      skill_level: "All levels welcome",
      game: "melee",
      description: "description",
      current_players: "n/a",
      max_players: "n/a",
      current_setup: "current_setup",
      photo: "photo",
      date: "date",
      start_time: "start_time",
      end_time: "end_time",
      lat: "lat",
      lng: "lng",
    };
  }

  submitEvent() {
    navigator.geolocation.getCurrentPosition((location) => {
      this.setState(
        {
          lat: location.coords.latitude,
          lng: location.coords.longitude
        }, () => this.props.postEvent(this.state)
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="position" style={styles.form} keyboardVerticalOffset={-50}>
        <ScrollView>
          <Text style={styles.formText}>Event Name</Text>
          <TextInput
            onChangeText={(val) => this.setState({ event_name: val })}
            value={this.state.event_name}
            placeholder="Event Name"
            placeholderTextColor="#4C4C50"
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />

        <Text style={styles.formText}>Skill Level</Text>
          <TextInput
            onChangeText={(val) => this.setState({ skill_level: val })}
            value={this.state.skill_level}
            placeholder="Skill Level"
            placeholderTextColor="#4C4C50"
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />

          <Text style={styles.formText}>Game</Text>
          <TextInput
            onChangeText={(val) => this.setState({ game: val })}
            value={this.state.game}
            placeholder="Game"
            placeholderTextColor="#4C4C50"
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />

          <Text style={styles.formText}>Description</Text>
          <TextInput
            onChangeText={(val) => this.setState({ description: val })}
            value={this.state.description}
            placeholder="Description"
            placeholderTextColor="#4C4C50"
            returnKeyType="next"
            onSubmitEditing={() => this.displayNameInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />

          <Text style={styles.formText}>Current Players</Text>
          <TextInput
            onChangeText={(val) => this.setState({ current_players: val })}
            value={this.state.current_players}
            placeholder="Current Players"
            placeholderTextColor="#4C4C50"
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={() => this.descriptionInput.focus()}
            ref={(input) => this.current_players = input}
            style={styles.input}
          />

          <Text style={styles.formText}>Max Players</Text>
          <TextInput
            onChangeText={(val) => this.setState({ max_players: val })}
            value={this.state.max_players}
            placeholder="Max Players"
            placeholderTextColor="#4C4C50"
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={() => this.gameInput.focus()}
            ref={(input) => this.descriptionInput = input}
            style={styles.input}
          />

          <Text style={styles.formText}>Current Setup</Text>
          <TextInput
            onChangeText={(val) => this.setState({ current_setup: val })}
            value={this.state.current_setup}
            placeholder="Current Setup"
            placeholderTextColor="#4C4C50"
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={() => this.gameInput.focus()}
            ref={(input) => this.current_setup = input}
            style={styles.input}
          />

        <Text style={styles.formText}>Photo</Text>
          <TextInput
            onChangeText={(val) => this.setState({ photo: val })}
            value={this.state.photo}
            placeholder="URL"
            placeholderTextColor="#4C4C50"
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={() => this.gameInput.focus()}
            ref={(input) => this.current_setup = input}
            style={styles.input}
          />



          <Text style={styles.formText}>Start Date</Text>
          <DatePicker
            style={{width: 200}}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
            }}
            onDateChange={(date) => {this.setState({date: date})}}
          />

          <Text style={styles.formText}>Start Time</Text>
          <DatePicker
            style={{width: 200}}
            date={this.state.start_time}
            mode="time"
            placeholder="select date"
            format="h:mm:ss"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
            }}
            onDateChange={(start_time) => {this.setState({start_time: start_time})}}
          />

          <Text style={styles.formText}>End Time</Text>
          <DatePicker
            style={{width: 200}}
            date={this.state.end_time}
            mode="time"
            placeholder="end time"
            format="h:mm:ss"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
            }}
            onDateChange={(end_time) => {this.setState({end_time: end_time})}}
          />


          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.submitEvent()}>
            <Text style={styles.buttonText}>Host Event</Text>
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
    backgroundColor: "#210c56"
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150,
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

export default AddHostingForm;
