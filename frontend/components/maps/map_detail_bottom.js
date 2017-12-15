import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert, Image, TouchableHighlight, TouchableOpacity } from 'react-native';


class MapDetailBottom extends Component {
  render() {
    const { navigation, detailId } = this.props;
    const { container, text, button } = styles;
    return(
      <View style={container}>
        <Text style={text}>name for user {detailId}</Text>
        <TouchableHighlight
          style={button}
          onPress={() => navigation.navigate('UserDetail', {id: detailId})}>
          <Text style={text}>Player Details</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default MapDetailBottom;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 100,
    alignSelf: "stretch",
    backgroundColor: "#210c56",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#fff",
    fontSize: 18
  },
  button: {
    alignSelf: "stretch",
    minHeight: 40,
    minWidth: 40,
    margin: 10,
    backgroundColor: "#000",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  }
});
