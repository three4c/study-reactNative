import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';

const dateString = (date) => {
  if (!date) {
    return '';
  }

  const dateObject = date.toDate();
  return dateObject.toISOString().split('T')[0];
};

const MemoList = (props) => {
  const renderMemo = ({ item, id }) => (
    <TouchableHighlight key={id} onPress={() => props.navigation.navigate('MemoDetail', { memo: item })}>
      <View style={styles.memoListItem}>
        <Text style={styles.memoTitle}>{item.body}</Text>
        <Text style={styles.memoDate}>{dateString(item.createdOn)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={styles.memoList}>
      <FlatList data={props.memoList} renderItem={renderMemo} />
    </View>
  );
};

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
