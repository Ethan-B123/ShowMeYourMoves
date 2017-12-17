import React from "react";
import { TabNavigator } from 'react-navigation';
import AddSeekingForm from './add_seeking_container';
import AddHostingForm from './add_hosting_container';
import { View, StyleSheet } from "react-native"

// export default class MapActionNavClass extends React.Component  {
//   render() {
//     debugger
//
//     return (
//       <View>
//         <MapActionNav
//           stackNav={this.props.navigation}
//           />
//       </View>
//     )
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#210c56"
  },
});

export default TabNavigator({
  AddSeekingForm: {
    screen: AddSeekingForm,
    navigationOptions: {
      headerTitle: 'AddSeekingForm',
    },
  },
  AddHostingForm: {
    screen: AddHostingForm,
    navigationOptions: {
      headerTitle: 'AddHostingForm',
    },
  },
});
