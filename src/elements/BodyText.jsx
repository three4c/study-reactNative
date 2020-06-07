import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BodyText = (props) => (
  <View>
    <Text style={styles.text}>{props.children}</Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    color: '#f03',
  },
});

export default BodyText;
