import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

// rops.navigation.navigate('MemoEdit')

const MemoListScreen = (props) => {
  const handlePress = () => {
    const { params } = props.navigation.state;
    props.navigation.navigate('MemoCreate', {
      currentUser: params.currentUser,
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
