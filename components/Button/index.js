import React, {Component} from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

export default class Button extends Component {
  render() {
    const { label, onPress, btnColorBlueOrGreen } = this.props;
    return (
      <TouchableHighlight
      style={[
        styles.container,
        (btnColorBlueOrGreen ? styles.btnBlue : styles.btnGreen),
      ]}
      onPress={onPress}
    >
      <Text
        style={styles.text}
      >{label}</Text>
    </TouchableHighlight>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    height: 32,
    width: 120,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 16,
  },
  btnBlue: {
    backgroundColor: 'blue'
  },
  btnGreen: {
    backgroundColor: 'green'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  },
});