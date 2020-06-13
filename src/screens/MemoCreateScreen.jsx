import React, { useState } from 'react';
import firebase from 'firebase';
import { StyleSheet, View, TextInput } from 'react-native';

import CircleButton from '../elements/CircleButton';

const MemoCreateScreen = (props) => {
  const [bodyText, setBodyText] = useState('');

  const handlePress = () => {
    const { params } = props.navigation.state;
    const db = firebase.firestore();
    db.collection(`users/${params.currentUser.user.uid}/memos`)
      .add({
        body: bodyText,
        createdOn: new Date(),
      })
      .then((docRef) => {
        // eslint-disable-next-line no-console
        console.log(docRef.id);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
    props.navigation.goBack();
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
