import { Ionicons } from '@expo/vector-icons';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const BackButton = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
    <Ionicons name="ios-arrow-back" color="#27033E" size={50}/>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 8,
    left: 10,
    width: 40
  }
});

export default BackButton;
