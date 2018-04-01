import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
	state = { email: '', password: '' };

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						placeholder="user@domain.com"
						autoCorrect={false}
						label="Email"
						value={this.state.email}
					 	onChangeText={email => this.setState({ email })}
						/>
				</CardSection>
				<CardSection>
					<Input
						secureTextEntry={true}
						placeholder="password"
						autoCorrect={false}
						label="Password"
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
						/>
				</CardSection>
				<CardSection>
					<Button>
						Log in
					</Button>
				</CardSection>
			</Card>
		);
	}

} // class

export default LoginForm;
