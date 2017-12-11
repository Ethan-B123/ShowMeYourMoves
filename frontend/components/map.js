import React, { Component } from "react";
import { View, StyleSheet, Image } from 'react-native';
import MapView from "react-native-maps";
import MapIcon from "./map_icon";
// import { MapView } from "Expo";

const DEMO_PLAYERS = [
  { latitude: 37.798323, longitude: -122.4209297 },
  { latitude: 37.7973596, longitude: -122.4119088 },
  { latitude: 37.7929689, longitude: -122.4127009 },
  { latitude: 37.7844654, longitude: -122.4091938 }
]

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  componentDidMount() {
    this.setState({
      playerIconDefaultSrc: require("../../assets/map_icons/person_icon_purple.png")
    })
  }

  getInitialState() {
    return {
      region: {
        latitude: 37.7989666,
        longitude: -122.40135179999999,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      selectedIcon: -1
    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  showPlayer(latLng, id) {
    const icon = id === this.state.selectedIcon // TODO: use user/event id
      ? require("../../assets/map_icons/person_icon_highlighted.png")
      : require("../../assets/map_icons/person_icon_purple.png");
    const icon2 = require("../../assets/map_icons/person_icon_purple.png");
    return (
      <MapIcon
        key={id}
        latLng={latLng}
        imgSrc={this.state.playerIconDefaultSrc}
      />
    )
  }

  render() {
    return (
      <MapView
        style={styles.map}
        region={this.state.region}
        onRegionChange={this.onRegionChange.bind(this)}>
        {DEMO_PLAYERS.map(
          (latLng, idx) => this.showPlayer(latLng, idx)
        )}
      </ MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flexGrow: 1,
    alignSelf: 'stretch'
  },
  markerView: {
    backgroundColor: "#fff",
    width: 30,
    height: 30
  },
  image: {
    backgroundColor: "#ccc",
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  }
});

export default Map;
