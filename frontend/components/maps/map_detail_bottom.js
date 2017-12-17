import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert, Image, TouchableHighlight, TouchableOpacity } from 'react-native';


class MapDetailBottom extends Component {

  userDetails() {
    const { nearbyPlayers, detailId, type } = this.props;
    const { textHeader, text, detailBox } = styles;
    if (type !== "player") {
      return (<View></View>)
    }
    const user = nearbyPlayers[detailId.toString()]
    return (
      <View
        key={type + detailId}
        style={detailBox}
      >
        <Text style={textHeader}>{user.display_name}</Text>
        <Text style={text}>{user.game}</Text>
        <Text style={text}>{user.skill_level}</Text>
      </View>
    )
  }

  eventDetails() {
    const { nearbyEvents, detailId, type } = this.props;
    const { textHeader, text, detailBox } = styles;
    if (type !== "event") {
      return (<View></View>)
    }
    const event = nearbyEvents[detailId.toString()]
    return (
      <View
        key={type + detailId}
        style={detailBox}
      >
        <Text style={textHeader}>{event.event_name}</Text>
        <Text style={text}>{event.game}</Text>
        <Text style={text}>{event.skill_level}</Text>
      </View>
    )
  }

  redirect() {
    const { navigation, detailId, type, nearbyEvents, nearbyPlayers } = this.props;
    if (type === "player") {
      navigation.navigate('UserDetail', {id: detailId, name: nearbyPlayers[detailId.toString()].display_name})
    } else if (type === "event") {
      navigation.navigate('EventDetail', {id: detailId, name: nearbyEvents[detailId.toString()].event_name})
    }
  }

  render() {
    const { navigation, detailId } = this.props;
    const { container, text, textWhite, button } = styles;
    return(
      <View style={container}>
        {this.userDetails()}
        {this.eventDetails()}

        <TouchableHighlight
          style={button}
          onPress={this.redirect.bind(this)}
        >
          <View>
            <Text style={textWhite}>More Info</Text>
          </View>
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
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  detailBox: {
    alignSelf: "stretch",
    // backgroundColor: "pink",
    alignItems: "center"
  },
  text: {
    color: "#000",
    fontSize: 14
  },
  textHeader: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 24,
    paddingBottom: 6,
    paddingTop: 3
  },
  textWhite: {
    color: "#fff",
    fontSize: 18
  },
  button: {
    alignSelf: "stretch",
    minHeight: 40,
    minWidth: 40,
    margin: 10,
    backgroundColor: "#210c56",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  }
});
