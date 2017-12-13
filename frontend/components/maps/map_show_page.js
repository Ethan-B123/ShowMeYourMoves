import React, { Component } from "react";
import { Image, View, StyleSheet, Text, StatusBar } from 'react-native';
import MapIcon from "./map_icon";
import Map from "./map_container";
import MapDetailBottom from "./map_detail_bottom";

class MapShowPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      detailOpen: false,
      detailId: 0
    };
  }

  openDetail(detailId) {
    return () => (
      this.setState({ detailOpen: true, detailId })
    );
  }

  closeDetail() {
    return () => this.setState({ detailOpen: false });
  }

  render() {
    return(
      <View
        style={styles.container}
      >
        <StatusBar
          hidden={true}
        />
        <View style={styles.topBar}>
          <View style={styles.left}>
            <Image
              source={require("./../../../assets/map_icons/person_icon_highlighted.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.right}>
            <Text style={styles.text}>Activity Map</Text>
          </View>
        </View>

        <Map
          openDetail={this.openDetail.bind(this)}
          closeDetail={this.closeDetail.bind(this)}
          detailIsOpen={this.state.detailOpen}
        />

        <View style={ this.state.detailOpen
          ? styles.bottomBarShowing
          : styles.bottomBarHidden
        }>
          <MapDetailBottom
            detailId={this.state.detailId}
          />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignSelf: 'stretch'
  },
  text: {
    color: "#fff",
    fontSize: 18
  },
  topBar: {
    minHeight: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  left: {
    width: 50,
    maxHeight: 50,
  },
  right: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#210c56",
    justifyContent: "center",
    alignItems: "center"
  },
  bottomBarShowing: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 50
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  bottomBarHidden: {
    maxHeight: 0
  }
});

export default MapShowPage;
