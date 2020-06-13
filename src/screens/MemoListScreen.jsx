import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

// rops.navigation.navigate('MemoEdit')

const MemoListScreen = (props) => {
  const handlePress = () => {
    props.navigation.navigate('MemoCreate');
  };

  const [memoList, setMemoList] = useState([]);

  useEffect(() => {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/memos`)
      .get()
      .then((snapshot) => {
        const memoListArray = [];
        snapshot.forEach((doc) => {
          memoListArray.push({ ...doc.data(), key: doc.id });
        });
        setMemoList(memoListArray);
      });
  }, []);

  return (
    <View style={styles.container}>
      <MemoList memoList={memoList} navigation={props.navigation} />
      <CircleButton name="plus" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fffdf6',
  },
});

export default MemoListScreen;
