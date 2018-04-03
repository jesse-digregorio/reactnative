import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyDF0vwz2hGjWgy22gzyA0XB_EzbmMlB_sc',
			authDomain: 'authentication-rnc9.firebaseapp.com',
			databaseURL: 'https://authentication-rnc9.firebaseio.com',
			projectId: 'authentication-rnc9',
			storageBucket: 'authentication-rnc9.appspot.com',
			messagingSenderId: '320056014461'
  	});

		firebase.auth().onAuthStateChanged((user) => {
				if (user) {
					this.setState({ loggedIn: true });
				} else {
					this.setState({ loggedIn: false });
				}
		});

	} //componentWillMount

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (<CardSection><Button>Log Out</Button></CardSection>);
			case false:
				return <LoginForm />;
			default:
				return (<CardSection><Spinner size="large" /></CardSection>);
		}
	}


	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent() }
			</View>
			);
	}

}

export default App;
