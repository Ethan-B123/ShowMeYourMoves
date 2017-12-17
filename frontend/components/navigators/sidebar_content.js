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
      <View>
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
  name: {
    color: "#FFF",
    fontSize: 18,
    marginVertical: 5
  },
  title: {
    color: "#FFF",
    fontSize: 24
  }
})
