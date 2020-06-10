import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const MemoList = (props) => (
  <View style={styles.memoList}>
    <TouchableHighlight onPress={() => props.navigation.navigate('MemoDetail')}>
      <View style={styles.memoListItem}>
        <Text style={styles.memoTitle}>講座のアイテム</Text>
        <Text style={styles.memoDate}>2020/06/07</Text>
      </View>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});

export default MemoList;
