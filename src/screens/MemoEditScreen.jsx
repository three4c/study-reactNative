import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import CircleButton from '../elements/CircleButton';

const MemoEditScreen = (props) => (
  <View style={styles.container}>
    <TextInput style={styles.memoEditInput} multiline value="Hi" />
    <CircleButton name="check" onPress={() => props.navigation.goBack()} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 32,
    fontSize: 16,
  },
});

export default MemoEditScreen;
