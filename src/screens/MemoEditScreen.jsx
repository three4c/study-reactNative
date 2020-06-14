import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';
import CircleButton from '../elements/CircleButton';

const MemoEditScreen = (props) => {
  const [memo, setMemo] = useState({ body: '', key: '' });
  useEffect(() => {
    const { params } = props.navigation.state;
    setMemo({ body: params.memo.body, key: params.memo.key });
  }, []);

  const handlePress = () => {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const newDate = firebase.firestore.Timestamp.now();
    db.collection(`users/${currentUser.uid}/memos`)
      .doc(memo.key)
      .update({
        body: memo.body,
        createdOn: newDate,
      })
      .then(() => {
        const { navigation } = props;
        navigation.state.params.returnMemo({
          body: memo.body,
          key: memo.key,
          createdOn: newDate,
        });
      })
      .catch(() => {});
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.memoEditInput}
        multiline
        value={memo.body}
        onChangeText={(text) => setMemo({ body: text, key: memo.key })}
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

export default MemoEditScreen;
