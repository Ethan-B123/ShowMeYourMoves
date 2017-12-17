import { Entypo } from '@expo/vector-icons';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const HamburgerMenu = ({ navigation }) => (
  <View>
    <TouchableOpacity style={styles.hamburger} onPress={() => navigation.navigate('DrawerOpen')}>
      <Entypo name="menu" color="white" size={35}/>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  hamburger: {
    marginLeft: 10
  }
});

export default HamburgerMenu;
