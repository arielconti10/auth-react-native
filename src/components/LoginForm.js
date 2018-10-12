import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small'/>
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }

  onButtonPress() {
    const {email, password} = this.state;

    this.setState({error: '', loading: true});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch((e) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch( (error, e) => {this.setState( { error: error.message || e.message, loading: false}) });
      });
  }

  onLoginFail() {
    console.log('blablabla');


  }

  onLoginSuccess() {
    console.log('bla');
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    })
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            keyboardType="email-address"
            placeholder="user@email.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({password})}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;