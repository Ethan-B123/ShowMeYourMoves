import React, { Component } from "react";
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import MapIcon from "./map_icon";
import Map from "./map";

class MapShowPage extends Component {
  render() {
    return(
      <View
        style={styles.container}
      >
        <StatusBar
          hidden={true}
        />
        <View style={styles.topBar}>
          <Text style={styles.left}>test 1</Text>
          <View style={styles.right}>
            <Text>test 2</Text>
          </View>
        </View>
        <Map />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignSelf: 'stretch'
  },
  topBar: {
    minHeight: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  left: {
    color: "#fff",
    textAlign: "center",
    width: 50
  },
  right: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MapShowPage;
