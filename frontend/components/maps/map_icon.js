import React, { Component } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MapView from "react-native-maps";


class MapIcon extends Component {
  constructor(props) {
    super(props);
  }

  pressFn(e) {
    const { openDetail, closeDetail, detailIsOpen } = this.props;
    e.preventDefault();
    openDetail(e);
  }

  render() {
    const { latLng, imgSrc } = this.props;
    return (
        <MapView.Marker
          coordinate={latLng}
          onPress={this.pressFn.bind(this)}
        >
          <TouchableOpacity
            style={styles.markerView}>
            <Image
              source={imgSrc}
              style={styles.image}
            />
          </TouchableOpacity>
        </MapView.Marker>
    );
  }
}

export default MapIcon;


const styles = StyleSheet.create({
  markerView: {
    backgroundColor: "#fff",
    borderRadius: 15,
    width: 30,
    height: 30
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  }
});
