import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

const MemoListScreen = (props) => (
  <View style={styles.container}>
    <MemoList navigation={props.navigation} />
    <CircleButton
      name="plus"
      onPress={() => props.navigation.navigate('MemoEdit')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fffdf6',
  },
});

export default MemoListScreen;
