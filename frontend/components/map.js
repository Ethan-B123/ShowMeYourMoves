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

const DEMO_SESSIONS = [
  { latitude: 37.798323 + 0.001, longitude: -122.4209297 },
  { latitude: 37.7973596 + 0.001, longitude: -122.4119088 },
  { latitude: 37.7929689 + 0.001, longitude: -122.4127009 },
  { latitude: 37.7844654 + 0.001, longitude: -122.4091938 }
]

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  componentDidMount() {
    this.setState({
      playerIconDefaultSrc: require("../../assets/map_icons/person_icon_purple.png"),
      playerIconHighlightedSrc: require("../../assets/map_icons/person_icon_highlighted.png")
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
      players: DEMO_PLAYERS,
      sessions: DEMO_SESSIONS,
      selectedIcon: -1,
      timeout: undefined
    };
  }

  onRegionChange(region) {
    console.log(region);
    this.setState({ region });
  }

  openDetailFixClip(id) {
    const { openDetail } = this.props;
    const doOpenDetail = openDetail(id);
    return (e) => {
      const coordinate = e.nativeEvent.coordinate;
      const region = Object.assign({}, this.state.region);
      region.latitude = coordinate.latitude;
      region.longitude = coordinate.longitude;
      // debugger
      this.mapView.animateToCoordinate(coordinate, 3);
      // clearTimeout(this.state.timeout);
      this.setState({ region });
      // const updateRegion = function() {
      //   // debugger
      // }
      // const timeout = setTimeout(updateRegion.bind(this), 0);
      // this.setState({ timeout });
      doOpenDetail(id);
    }
  }

  makeMapIcon(latLng, id) {
    const { playerIconDefaultSrc, playerIconHighlightedSrc } = this.state;
    const { openDetail, closeDetail, detailIsOpen } = this.props;
    const icon = id === this.state.selectedIcon // TODO: use user/event id
      ? require("../../assets/map_icons/person_icon_highlighted.png")
      : require("../../assets/map_icons/person_icon_purple.png");
    const icon2 = require("../../assets/map_icons/person_icon_purple.png");
    return (
      <MapIcon
        key={id}
        latLng={latLng}
        imgSrc={playerIconDefaultSrc}
        openDetail={this.openDetailFixClip(id).bind(this)}
        closeDetail={closeDetail()}
      />
    )
  }

  render() {
    const { region } = this.state;
    const { closeDetail } = this.props;
    return (
      <MapView
        ref={(mapView) => this.mapView = mapView}
        style={styles.map}
        region={region}
        onPress={closeDetail()}
        onRegionChange={this.onRegionChange.bind(this)}>
        {DEMO_PLAYERS.map(
          (latLng, idx) => this.makeMapIcon(latLng, idx)
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
