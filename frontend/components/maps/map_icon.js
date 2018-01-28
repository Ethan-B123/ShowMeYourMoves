import React, { Component } from "react";
import { View, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
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
    const { latLng, imgSrc, selected, idType } = this.props;
    const { markerView, markerViewSelected, image } = styles;
    const thisStyle = selected ? markerViewSelected : markerView;
    let width, height, backgroundColor;
    if(selected){
      // width = 300;
      // height = 300;
      // backgroundColor = "#000";
      // debugger
      // console.log('selected')
    } else {
      // width = 15;
      // height = 15;
      // console.log(idType);
      
      // console.log('not selected')
    }
    return (
        <MapView.Marker
          coordinate={latLng}
          onPress={this.pressFn.bind(this)}
          >
          <View
            ref="thing"
            style={[markerView, selected && markerViewSelected]}>
            <Image
              source={imgSrc}
              style={image}
            />
          </View>
        </MapView.Marker>
    );
  }
}

export default MapIcon;


const styles = StyleSheet.create({
  markerView: {
    backgroundColor: "#fff",
    borderRadius: 150,
    width: 30,
    height: 30
  },
  markerViewSelected: {
    backgroundColor: "black",
    borderRadius: 150,
    width: 40,
    height: 40
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  }
});
