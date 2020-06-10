import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableHighlight,
  Text,
} from 'react-native';

const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableHighlight
        style={styles.button}
        onPress={() => props.navigation.navigate('Home')}
        underlayColor="#c70f66"
      >
        <Text style={styles.buttonTitle}>ログインする</Text>
      </TouchableHighlight>
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
});

export default LoginScreen;
