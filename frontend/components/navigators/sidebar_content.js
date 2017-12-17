import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class SideBarContent extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, 'sidebar props');
  }

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
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
              <Text key={player.id} style={styles.item} onPress={this.navigateToScreen('UserDetail')}>
                {player.display_name}
              </Text>
            )
          })}
        </ScrollView>
        <View>
          <Text style={styles.item} onPress={this.navigateToScreen('ActivityMap')}>Activity Map</Text>
          <Text style={styles.item} onPress={this.navigateToScreen('UserSettings')}>User Settings</Text>
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
  item: {
    color: "#FFF",
    fontSize: 22,
    marginBottom: 20
  },
  title: {
    color: "#FFF",
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold'
  }
})
