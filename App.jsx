import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from './src/components/Appbar';
import MemoDetailScreen from './src/screens/MemoDetailScreen';

const App = () => (
  <View style={styles.container}>
    <Appbar />
    <MemoDetailScreen />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    paddingTop: 78,
  },
});

export default App;
