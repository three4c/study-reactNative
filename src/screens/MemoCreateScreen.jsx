import React, { useState } from 'react';
import firebase from 'firebase';
import { StyleSheet, View, TextInput } from 'react-native';

import CircleButton from '../elements/CircleButton';

const MemoCreateScreen = (props) => {
  const [bodyText, setBodyText] = useState('');

  const handlePress = () => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    db.collection(`users/${currentUser.uid}/memos`)
      .add({
        body: bodyText,
        createdOn: new Date(),
      })
      .then(() => {
        props.navigation.goBack();
      })
      .catch(() => {});
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.memoEditInput}
        multiline
        value={bodyText}
        onChangeText={(text) => setBodyText(text)}
      />
      <CircleButton name="check" onPress={handlePress} />
    </View>
  );
};

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

export default MemoCreateScreen;
