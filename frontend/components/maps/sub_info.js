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
          <Image style={styles.icon} source={{uri: "https://res.cloudinary.com/lara-cloud1/image/upload/v1513554999/smash_logo_light_dxh1om.png"}}/>
          <Text style={styles.text}>{this.props.game}</Text>
        </View>
        <View style={styles.subInfo}>
          <Image style={styles.icon} source={{uri: "https://res.cloudinary.com/lara-cloud1/image/upload/v1513554999/small_shine_light_zghfrl.png"}}/>
          <Text style={styles.text}>{this.props.skillLevel}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  subInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3
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
