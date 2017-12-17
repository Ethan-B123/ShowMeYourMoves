
import React, { Component } from "react";
import { View, StyleSheet, Image } from 'react-native';
import MapView from "react-native-maps";
import MapIcon from "./map_icon";

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  componentDidMount() {
    this.setState({
      // playerIconDefaultSrc: require("./../../../assets/map_icons/person_icon_purple.png"),
      // playerIconHighlightedSrc: require("./../../../assets/map_icons/person_icon_highlighted.png"),
      // houseIconDefaultSrc: require("./../../../assets/map_icons/house_icon_green.png"),
      // houseIconHighlightedSrc: require("./../../../assets/map_icons/house_icon_highlighted.png")
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
      selectedIcon: "",
      timeout: undefined
    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  openDetailFixClip(id, type) {
    const { openDetail } = this.props;
    const doOpenDetail = openDetail(id, type);
    return (e) => {
      const coordinate = e.nativeEvent.coordinate;
      const region = Object.assign({}, this.state.region);
      region.latitude = coordinate.latitude;
      region.longitude = coordinate.longitude;
      this.mapView.animateToCoordinate(coordinate, 500);
      this.setState({ region, selectedIcon: id + type });
      doOpenDetail();
    }
  }

  makeCloseDetail() {
    const doCloseDetail = this.props.closeDetail();
    return () => {
      doCloseDetail();
      this.setState({ selectedIcon: "" })
    }
  }

  makeMapIcon(latLng, id, type) {
    const {
      playerIconDefaultSrc,
      playerIconHighlightedSrc,
      houseIconDefaultSrc,
      houseIconHighlightedSrc
    } = this.state;
    const { openDetail, closeDetail, detailIsOpen } = this.props;

    let icon;

    if (type === "player") {
      if (this.state.selectedIcon === id + type) {
        icon = {uri: "http://res.cloudinary.com/dhc8w148v/image/upload/v1513463328/person_icon_highlighted_e1bkad.png"}
      } else {
        icon = {uri: "http://res.cloudinary.com/dhc8w148v/image/upload/v1513463328/person_icon_purple_cyjmem.png"};
      }
    } else if (type === "event") {
      if (this.state.selectedIcon === id + type) {
        icon = {uri: "http://res.cloudinary.com/dhc8w148v/image/upload/v1513463328/house_icon_highlighted_aexz9k.png"}
      } else {
        icon = {uri: "http://res.cloudinary.com/dhc8w148v/image/upload/v1513463328/house_icon_green_mvmsn6.png"}
      }
    }

    const newLatLong = {}
    newLatLong.latitude = parseFloat(latLng.latitude)
    newLatLong.longitude = parseFloat(latLng.longitude)
    return (
      <MapIcon
        key={id + type}
        latLng={newLatLong}
        imgSrc={icon}
        openDetail={this.openDetailFixClip(id, type).bind(this)}
      />
    )
  }

  render() {
    const { region } = this.state;
    const { nearbyPlayers, nearbyEvents } = this.props;

    return (
      <MapView
        ref={(mapView) => this.mapView = mapView}
        style={styles.map}
        region={region}
        onPress={this.makeCloseDetail()}
        onRegionChange={this.onRegionChange.bind(this)}>
        {nearbyPlayers.map(
          ({location, id}) => this.makeMapIcon(location, id, "player")
        )}
        {nearbyEvents.map(
          ({location, id}) => this.makeMapIcon(location, id, "event")
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
