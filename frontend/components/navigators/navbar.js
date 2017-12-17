import React from 'react';
import NavigationBar from 'react-native-navbar';

export default class NavBar extends React.Component {
  titleConfig() {
    return {
      title: 'Hello, world'
    }
  }

  rightButtonConfig() {
    return {
      title: 'Next',
      handler: () => alert('hello!')
    }
  }

  render() {
    return (
      <NavigationBar
        title={this.titleConfig}
        rightButton={this.rightButtonConfig}
      />
    )
  }
}
