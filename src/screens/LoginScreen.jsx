import React, { useState } from 'react';
import firebase from 'firebase';
import { StyleSheet, View, TextInput, TouchableHighlight, Text, TouchableOpacity } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

const LoginScreen = (props) => {
  const [email, setEmail] = useState('user1@sample.com');
  const [password, setPassword] = useState('user1user1');

  const handleSubmit = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Home' })],
        });
        props.navigation.dispatch(resetAction);
      })
      .catch(() => {});
  };

  const handlePress = () => {
    props.navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ログイン</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email Address"
        underlineColorAndroid="transparent"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Password"
        secureTextEntry
        underlineColorAndroid="transparent"
      />
      <TouchableHighlight style={styles.button} onPress={handleSubmit} underlayColor="#c70f66">
        <Text style={styles.buttonTitle}>ログインする</Text>
      </TouchableHighlight>

      <TouchableOpacity onPress={handlePress} style={styles.signup}>
        <Text style={styles.signupText}>メンバー登録する</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  title: {
    fontSize: 24,
    alignSelf: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#e31676',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
  },
  signup: {
    marginTop: 16,
    alignSelf: 'center',
  },
  signupText: {
    fontSize: 16,
  },
});

export default LoginScreen;
