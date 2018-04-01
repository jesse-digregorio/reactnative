import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
		apiKey: 'AIzaSyDF0vwz2hGjWgy22gzyA0XB_EzbmMlB_sc',
		authDomain: 'authentication-rnc9.firebaseapp.com',
		databaseURL: 'https://authentication-rnc9.firebaseio.com',
		projectId: 'authentication-rnc9',
		storageBucket: 'authentication-rnc9.appspot.com',
		messagingSenderId: '320056014461'
  	});
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
			);
	}

}

export default App;
