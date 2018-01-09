/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu Button for dev menu',
});

import Square from './components/Square';
import Button from './components/Button';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoMeSquare: true
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} selectable={true}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions} selectable={true} selectionColor={'red'}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        { this.state.shoMeSquare &&
          <Square style={styles.Square} />
        }
        <View style={styles.btnContainer}>
          <Button
            label={'Remove'}
            onPress={() => this.setState({ shoMeSquare: false })}
            btnColorBlueOrGreen={true}
          />
          <Button
            label={'Create'}
            onPress={() => this.setState({ shoMeSquare: true })}
            btnColorBlueOrGreen={false}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  btnContainer: {
    width: 300,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
