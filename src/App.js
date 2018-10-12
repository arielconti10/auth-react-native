import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import {Button, Header, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyA8GoUUxg02_YOfrCHsID2suhbVvCByERE",
      authDomain: "authentication-a1714.firebaseapp.com",
      databaseURL: "https://authentication-a1714.firebaseio.com",
      projectId: "authentication-a1714",
      storageBucket: "authentication-a1714.appspot.com",
      messagingSenderId: "398614673977"
    });

    firebase.auth().onAuthStateChanged( (user) => {
      if (user) {
        this.setState ({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    })
  }

  renderContent() {

    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={styles.viewButtonStyle}>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </View>
        );
      case false:
        return  (
          <View >
            <LoginForm />
          </View>
        );
      default:
        return (
          <View style={styles.viewSpinnerStyle}>
            <Spinner size='large'/>
          </View>
          );
    }

  }
  render () {
    return (
      <View style={{flex: 1}}>
        <Header headerText="Authentication" />
        { this.renderContent() }
      </View>
    )
  }

}

const styles = {
  viewSpinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewButtonStyle: {
    marginTop: 20,
  }
};

export default App;