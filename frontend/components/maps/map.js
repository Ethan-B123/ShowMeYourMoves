
import React, { Component } from "react";
import { View, StyleSheet, Image } from 'react-native';
import MapView from "react-native-maps";
// import { MapView } from "expo";
import MapIcon from "./map_icon";

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      calledMapReady: false
    };
  }

  getInitialState() {
    return {
      region: {
        latitude: 37.7989666,
        longitude: -122.40135179999999,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
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
      doOpenDetail(e);
    }
  }

  makeCloseDetail() {
    const doCloseDetail = this.props.closeDetail();
    return (e) => {
      doCloseDetail(e);
      if(e.nativeEvent.action === undefined ||
        e.nativeEvent.action === "press"
      ) {
        this.setState({ selectedIcon: "" })
      }
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
    const selected = this.state.selectedIcon === id + type;
    const newLatLong = {}
    newLatLong.latitude = parseFloat(latLng.latitude)
    newLatLong.longitude = parseFloat(latLng.longitude)
    console.log(this.state.selectedIcon);
    return (
      <MapIcon
        key={id + type}
        idType={id + type}
        selected={selected}
        latLng={newLatLong}
        imgSrc={icon}
        openDetail={this.openDetailFixClip(id, type).bind(this)}
      />
    )
  }

  updateMapOnce() {
    if (!this.state.calledMapReady) {
      this.setState({
        region: this.getInitialState().region,
        calledMapReady: true
      })
    }
  }

  render() {
    const { region } = this.state;
    const { nearbyPlayers, nearbyEvents } = this.props;

    return (
      <MapView
        ref={(mapView) => this.mapView = mapView}
        style={styles.map}
        onMapReady={this.updateMapOnce.bind(this)}
        moveOnMarkerPress={false}
        region={region}
        onPress={this.makeCloseDetail()}
        onRegionChange={this.onRegionChange.bind(this)}>
        {nearbyPlayers.map(
          ({location, id}) => this.makeMapIcon(location, id, "player")
        )}
        {nearbyEvents.map(
          ({location, id}) => this.makeMapIcon(location, id, "event")
        )}
      </MapView>
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
