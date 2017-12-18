import { Image, View, StyleSheet, Text, StatusBar } from 'react-native';
import React, { Component } from "react";

class SubInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={styles.subInfo}>
          <Image style={styles.icon} source={{uri: "https://res.cloudinary.com/lara-cloud1/image/upload/v1513551529/smash_logo_rdc40q.png"}}/>
          <Text style={styles.text}>{this.props.game}</Text>
        </View>
        <View style={styles.subInfo}>
          <Image style={styles.icon} source={{uri: "https://res.cloudinary.com/lara-cloud1/image/upload/v1513551528/small_shine_wm76yp.png"}}/>
          <Text style={styles.text}>{this.props.skillLevel}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  subInfo: {
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    color: "#000",
    fontSize: 14
  },
  icon: {
    height: 15,
    width: 15,
    marginRight: 5
  }
})

export default SubInfo;
