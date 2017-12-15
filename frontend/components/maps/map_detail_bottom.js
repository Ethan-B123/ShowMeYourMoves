import React, { Component } from "react";
import { View, StyleSheet, Text, StatusBar } from 'react-native';


class MapDetailBottom extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.text}></Text>
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
});
