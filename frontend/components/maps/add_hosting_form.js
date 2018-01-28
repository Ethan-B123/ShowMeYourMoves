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
      game: "Melee",
      description: undefined,
      max_players: undefined,
      current_setup: undefined,
      photo: undefined,
      date: undefined,
      start_time: undefined,
      end_time: undefined,
      lat: "lat",
      lng: "lng",
    };
  }

  submitEvent() {
    const { postEvent, navigation } = this.props;

    navigator.geolocation.getCurrentPosition((location) => {
      this.setState(
        {
          lat: location.coords.latitude,
          lng: location.coords.longitude
        }, () => {
          navigation.navigate("ActivityMap")
          postEvent(this.state)
        }
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

          {/* <Text style={styles.formText}>Current Players</Text>
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
          /> */}

          <Text style={styles.formText}>Max Player Count</Text>
          <TextInput
            onChangeText={(val) => this.setState({ max_players: val })}
            value={this.state.max_players}
            placeholder="Max Player Count"
            placeholderTextColor="#4C4C50"
            returnKeyType="next"
            autoCapitalize="none"
            keyboardType="numeric"
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



          <Text style={styles.formText}>Date</Text>
          <DatePicker
            style={styles.dateStyle}
            date={this.state.date}
            mode="date"
            placeholder="Select Date"
            format="MMM DD, YYYY"
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
              },
              dateText: {
                color: "white"
              }
            }}
            onDateChange={(date) => {this.setState({date: date})}}
          />

          <Text style={styles.formText}>Start Time</Text>
          <DatePicker
            style={styles.dateStyle}
            date={this.state.start_time}
            mode="time"
            placeholder="Select Start Time"
            format="h:mm a"
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
              },
              dateText: {
                color: "white"
              }
            }}
            onDateChange={(start_time) => {this.setState({start_time: start_time})}}
          />

          <Text style={styles.formText}>End Time</Text>
          <DatePicker
            style={styles.dateStyle}
            date={this.state.end_time}
            mode="time"
            placeholder="Select End Time"
            format="h:mm a"
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
              },
              dateText: {
                color: "white"
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
    backgroundColor: "#27033E"
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
  },
  dateStyle: {
    width: "100%"
  }
});

export default AddHostingForm;
