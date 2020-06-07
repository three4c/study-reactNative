import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CircleButton = (props) => (
  <View style={styles.circleButton}>
    <Text style={styles.circleButtonTitle}>{props.children}</Text>
  </View>
);

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    fontSize: 24,
    width: 48,
    height: 48,
    backgroundColor: '#e31676',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontSize: 32,
    lineHeight: 32,
    color: '#fff',
  },
});

export default CircleButton;
