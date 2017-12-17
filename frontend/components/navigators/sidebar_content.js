import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class SideBarContent extends React.Component {
  constructor(props) {
    super(props);
  }

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    console.log(this.props, 'rendering');
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Nearby Players</Text>
        {this.props.nearbyPlayers.map(player => {
          return (
            <Text key={player.id} style={styles.name} onPress={this.navigateToScreen('UserDetail')}>
              {player.display_name}
            </Text>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  name: {
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
