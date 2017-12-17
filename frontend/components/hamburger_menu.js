import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const HamburgerMenu = ({ navigation }) => (
  <View>
    <TouchableOpacity style={styles.hamburger} onPress={() => navigation.navigate('DrawerOpen')}>
      <MaterialCommunityIcons name="hamburger" color="white" size={35}/>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  hamburger: {
    marginLeft: 15
  }
});

export default HamburgerMenu;
