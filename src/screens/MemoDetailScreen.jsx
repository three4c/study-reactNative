import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

const MemoDetailScreen = (props) => {
  const [memo, setMemo] = useState({});

  useEffect(() => {
    const { params } = props.navigation.state;
    setMemo(params.memo);
  }, []);

  console.log(memo.createdOn);

  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <View>
          <Text style={styles.memoHeaderTitle}>{memo.body}</Text>
          <Text style={styles.memoHeaderDate}>{String(memo.createdOn)}</Text>
        </View>
      </View>

      <View style={styles.memoContent}>
        <Text>講座のアイデアです。</Text>
      </View>

      <CircleButton
        name="pencil"
        style={styles.editButton}
        color="white"
        onPress={() => props.navigation.navigate('MemoEdit')}
      />
    </View>
  );
};

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
