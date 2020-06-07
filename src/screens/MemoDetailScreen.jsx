import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

const MemoDetailScreen = () => (
  <View style={styles.container}>
    <View style={styles.memoHeader}>
      <View>
        <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
        <Text style={styles.memoHeaderDate}>2020/06/07</Text>
      </View>
    </View>

    <View style={styles.memoContent}>
      <Text>講座のアイデアです。</Text>
    </View>

    <CircleButton style={styles.editButton} color="white">
      +
    </CircleButton>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    padding: 10,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  editButton: {
    top: 75,
  },
});

export default MemoDetailScreen;
