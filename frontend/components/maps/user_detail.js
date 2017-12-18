import React, { Component } from "react";
import { Image, View, StyleSheet, Text, TouchableHighlight, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BackButton from '../back_button';
import SubInfo from './sub_info';

class UserDetail extends Component {
  render() {
    const { scrollView, infoBox, subHeader, headerBox, headerText,
      subText, contentContainer, button, textWhite} = styles;
    const { id } = this.props.navigation.state.params;
    const player = this.props.nearbyPlayers[id.toString()];
    const details = player.details
    return (
      <ScrollView
        style={scrollView}
        contentContainerStyle={contentContainer}>
        <View style={headerBox}>
          <BackButton navigation={this.props.navigation}/>
          <Text style={headerText}>{player.display_name}</Text>
          <SubInfo game={player.game} skillLevel={player.skill_level}/>
        </View>
        <View style={infoBox}>
          <Text style={subHeader}>Profile Picture</Text>
          <Image style={{height: 200, width: 200, alignSelf: "center"}} source={{uri: details.image_url}}/>
        </View>
        <View style={infoBox}>
          <Text style={subHeader}>About Me</Text>
          <Text style={subText}>{details.description}</Text>
        </View>
        <View style={infoBox}>
          <Text style={subHeader}>Age</Text>
          <Text style={subText}>{details.age}</Text>
        </View>
        <View style={infoBox}>
          <Text style={subHeader}>Preferred Prounouns</Text>
          <Text style={subText}>{details.pronouns}</Text>
        </View>
        <View style={infoBox}>
          <Text style={subHeader}>Main Character</Text>
          <Text style={subText}>{details.main}</Text>
        </View>
        <View style={infoBox}>
          <Text style={subHeader}>Contact Info</Text>
          <Text style={subText}>{details.contact_info}</Text>
        </View>
      </ScrollView>
    )
  }
}
export default UserDetail;


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
    backgroundColor: "#210c56",
  },
  infoBox: {
    // alignSelf: "stretch",
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
    backgroundColor: "#210c56",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  }
});
