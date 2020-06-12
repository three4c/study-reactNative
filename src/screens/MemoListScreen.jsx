import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

// rops.navigation.navigate('MemoEdit')

const MemoListScreen = (props) => {
  const handlePress = () => {
    const db = firebase.firestore();
    db.collection('memos')
      .add({
        body: 'test memo',
        createdOn: '2017-12-12',
      })
      .then((docRef) => {
        // eslint-disable-next-line no-console
        console.log(docRef.id);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <MemoList navigation={props.navigation} />
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
