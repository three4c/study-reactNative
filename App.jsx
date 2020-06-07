import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from './src/components/Appbar';
import MemoList from './src/components/MemoList';
import CicleButton from './src/elements/CircleButton';

const App = () => (
  <View style={styles.container}>
    <Appbar />
    <MemoList />
    <CicleButton>+</CicleButton>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
});

export default App;
