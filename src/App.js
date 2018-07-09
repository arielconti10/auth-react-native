import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA8GoUUxg02_YOfrCHsID2suhbVvCByERE',
      authDomain: 'authentication-a1714.firebaseapp.com',
      databaseURL: 'https://authentication-a1714.firebaseio.com',
      projectId: 'authentication-a1714',
      storageBucket: 'authentication-a1714.appspot.com',
      messagingSenderId: '398614673977'
    });
  }
  
  render () {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>Auth app</Text>
      </View>
    )
  }
}

export default App;