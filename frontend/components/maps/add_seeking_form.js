import { Image, View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import React, { Component } from "react";

class AddSeekingForm extends Component {
  submitEvent(e) {
    const { postPlayer, navigation } = this.props;
    navigator.geolocation.getCurrentPosition((location) => {
      postPlayer(location.coords)
      navigation.navigate("ActivityMap")
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.submitEvent.bind(this)}>
          <Text style={styles.buttonText}>Put yourself on the map!</Text>
        </TouchableOpacity>
      </View>
    )
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
    margin: 30,
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

export default AddSeekingForm;
