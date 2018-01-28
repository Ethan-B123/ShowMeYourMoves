import React, { Component } from "react";
import { Animated, StyleSheet, Text, View, Button, Alert, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import SubInfo from './sub_info';

class MapDetailBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideAnim: new Animated.Value(0)  // Initial value for opacity: 0
    }
  }

  componentDidMount() {
    console.log("mounting")
    Animated.timing(                  // Animate over time
      this.state.slideAnim,            // The animated value to drive
      {
        toValue: 100,                   // Animate to opacity: 1 (opaque)
        duration: 1000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  componentWillReceiveProps(nextProps){
    const { type } = this.props;
    if (type.length === 0 && nextProps.type.length > 0){
      Animated.timing(                  // Animate over time
        this.state.slideAnim,            // The animated value to drive
        {
          toValue: 100,                   // Animate to opacity: 1 (opaque)
          duration: 10000,              // Make it take a while
        }
      ).start();

    } else if (type.length > 0 && nextProps.type.length === 0){
      Animated.timing(                  // Animate over time
        this.state.slideAnim,            // The animated value to drive
        {
          toValue: 0,                   // Animate to opacity: 1 (opaque)
          duration: 10000,              // Make it take a while
        }
      ).start();
    }
  }

  userDetails() {
    const { nearbyPlayers, detailId, type } = this.props;
    const { textHeader, text, detailBox, subInfo, icon } = styles;
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
        <SubInfo game={user.game} skillLevel={user.skill_level}/>
      </View>
    )
  }

  eventDetails() {
    const { nearbyEvents, detailId, type } = this.props;
    const { textHeader, text, detailBox, subInfo, icon } = styles;
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
        <SubInfo game={event.game} skillLevel={event.skill_level}/>
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
      <Animated.View style={[container, {minHeight: this.state.slideAnim}]}>
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
      </Animated.View>
    );
  }
}

export default MapDetailBottom;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // minHeight: 100,
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
  textHeader: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 24,
    paddingBottom: 7,
    paddingTop: 7
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
});
