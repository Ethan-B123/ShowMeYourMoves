import React, { Component } from "react";
import { Image, View, StyleSheet, Text, TouchableHighlight, ScrollView } from 'react-native';

class EventDetail extends Component {
  render() {
    const { scrollView, infoBox, subHeader, headerBox, headerText,
      subText, contentContainer, button, textWhite} = styles;
    const { id } = this.props.navigation.state.params;
    const event = this.props.nearbyEvents[id.toString()];
    const details = event.details
    return (
      <ScrollView
        style={scrollView}
        contentContainerStyle={contentContainer}>
        <View
          style={headerBox}
        >
          <Text style={headerText}>{event.event_name}</Text>
          <Text style={subText}>{event.game}</Text>
          <Text style={subText}>{event.skill_level}</Text>

          <TouchableHighlight
            style={button}

          >
            <View>
              <Text style={textWhite}>Send Message to Host</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={infoBox}>
          <Text style={subHeader}>Time</Text>
          <Text style={subText}>{details.date}</Text>
          <Text style={subText}>{details.start_time}</Text>
        </View>
        <View style={infoBox}>
          <Text style={subHeader}>Description</Text>
          <Text style={subText}>{details.description}</Text>
        </View>
        <View style={infoBox}>
          <Text style={subHeader}>Player Count</Text>
          <Text style={subText}>Current Amount: {details.current_player_count}</Text>
          <Text style={subText}>Maximum Amount: {details.max_player_count}</Text>
        </View>
        <View style={infoBox}>
          <Text style={subHeader}>Current Setup</Text>
          <Text style={subText}>{details.setup}</Text>
        </View>

      </ScrollView>
    )
  }
}
export default EventDetail;


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#fff"
  },
  headerBox: {
    alignSelf: "stretch",
    alignItems: "center",
    marginBottom: 30
  },
  headerText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 24,
    paddingBottom: 6,
    paddingTop: 3
  },
  container: {
    flexGrow: 1,
    alignSelf: 'stretch',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#210c56",
  },
  infoBox: {
    alignSelf: "stretch",
    marginLeft: 20,
    marginBottom: 5
  },
  subHeader: {
    fontWeight: "bold",
    marginBottom: 3,
    fontSize: 16
  },
  subText: {
    color: "#000",
    fontSize: 14
  },
  contentContainer: {
    paddingVertical: 20
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
