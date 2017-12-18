import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';


export default ({ navigation }) => {
  const { container, button } = styles;
  return (
    <View style={container}>
      <TouchableHighlight
        style={button}
        onPress={() => navigation.navigate('MapActionNavigator')}>
        <FontAwesome name="plus" color="white" size={30}/>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  button: {
    minHeight: 80,
    minWidth: 80,
    margin: 30,
    backgroundColor: "#27033E",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center"
  }
});
