import React from 'react';
import { ScrollView, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class SideBarContent extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, 'sidebar props');
  }

  navigateToScreen = (route, playerId) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
      params: {id: playerId}
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Nearby Players</Text>
        <ScrollView>
          {this.props.nearbyPlayers.map(player => {
            return (
              <TouchableOpacity key={player.id} style={styles.item} onPress={this.navigateToScreen('UserDetail', player.id)}>
                <Image style={styles.image} source={{uri: player.details.image_url}}/>
                <Text style={styles.text}>
                  {player.display_name}
                </Text>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
        <View>
          <TouchableOpacity style={styles.item} onPress={this.navigateToScreen('ActivityMap')}>
            <Text style={styles.text}>Activity Map</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={this.navigateToScreen('UserSettings')}>
            <Text style={styles.text}>User Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "space-between"
  },
  text: {
    color: "#FFF",
    fontSize: 22,
  },
  title: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: 'bold'
  },
  image: {
    height: 36,
    width: 36,
    marginRight: 15,
    borderRadius: 18
  },
  item: {
    marginTop: 30,
    flexDirection: "row"
  }
})
