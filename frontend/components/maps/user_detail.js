import React, { Component } from "react";
import { Image, View, StyleSheet, Text, StatusBar } from 'react-native';

class UserDetailPage extends Component {
  render() {
    const { container, text } = styles;
    const { id } = this.props.navigation.state.params;
    return (
      <View style={container}>
        <Text style={text}>details about {id}</Text>
      </View>
    )
  }
}

export default UserDetailPage;


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignSelf: 'stretch',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#210c56",
  },
  text: {
    color: "#fff",
    fontSize: 18
  },
});
