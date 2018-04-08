import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';

export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBo35Bi3jjTvnvPbkB7knuJ5YKjLwIUKK8',
      authDomain: 'manager-rnc9.firebaseapp.com',
      databaseURL: 'https://manager-rnc9.firebaseio.com',
      projectId: 'manager-rnc9',
      storageBucket: 'manager-rnc9.appspot.com',
      messagingSenderId: '297389060800'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Text>
            Marmalade!
          </Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
