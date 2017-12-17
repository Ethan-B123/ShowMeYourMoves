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
        <Text style={styles.title}>Nearby Events</Text>
        <ScrollView>
          {this.props.nearbyEvents.map(event => {
            return (
              <TouchableOpacity key={event.id} style={styles.item} onPress={this.navigateToScreen('EventDetail', event.id)}>
                <Image style={styles.image} source={{uri: event.details.photo}}/>
                <Text style={styles.text}>
                  {event.event_name}
                </Text>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
        <View style={{paddingTop: 15, borderTopWidth: 1, borderTopColor: "#FFF"}}>
          <TouchableOpacity style={styles.item} onPress={this.navigateToScreen('ActivityMap')}>
            <Image style={styles.image} source={{uri: "https://res.cloudinary.com/lara-cloud1/image/upload/v1513542359/235861_xaifbg.png"}}/>
            <Text style={styles.text}>Activity Map</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={this.navigateToScreen('UserSettings')}>
            <Image style={styles.image} source={{uri: "https://res.cloudinary.com/lara-cloud1/image/upload/v1513542490/white-cog-hi_lv7eyy.png"}}/>
            <Text style={styles.text}>User Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "space-between"
  },
  text: {
    color: "#FFF",
    fontSize: 18,
  },
  title: {
    color: "#FFF",
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 15
  },
  image: {
    height: 36,
    width: 36,
    marginRight: 15,
    borderRadius: 18
  },
  item: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  }
})
