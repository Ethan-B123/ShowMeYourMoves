import React, { Component } from "react";
import { Image, View, StyleSheet, Text, TouchableHighlight, ScrollView } from 'react-native';
import BackButton from '../back_button';
import SubInfo from './sub_info';

class EventDetail extends Component {
  render() {
    const { scrollView, infoBox, subHeader, headerBox, headerText,
      subText, subInfo, icon, contentContainer, button, textWhite} = styles;
    const { id } = this.props.navigation.state.params;
    const event = this.props.nearbyEvents[id.toString()];
    const details = event.details
    const dateString = new Date(details.date).toDateString();
    const startTimeString = new Date(details.start_time).toLocaleTimeString();
    const endTimeString = new Date(details.end_time).toLocaleTimeString();
    return (
      <ScrollView
        style={scrollView}
        contentContainerStyle={contentContainer}>
        <View style={headerBox}>
          <BackButton navigation={this.props.navigation}/>
          <Text style={headerText}>{event.event_name}</Text>
          <SubInfo game={event.game} skillLevel={event.skill_level}/>
        </View>
        <View style={infoBox}>
          <Text style={subHeader}>Time</Text>
          <Text style={subText}>{dateString}, {startTimeString} - {endTimeString}</Text>
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
    marginBottom: 25
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
    backgroundColor: "#27033E",
  },
  infoBox: {
    marginBottom: 15
  },
  subHeader: {
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 16
  },
  subText: {
    color: "#000",
    fontSize: 14
  },
  subInfo: {
    flexDirection: "row",
    alignItems: "center"
  },
  contentContainer: {
    padding: 20
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
    backgroundColor: "#27033E",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    height: 15,
    width: 15,
    marginRight: 5
  }
});
