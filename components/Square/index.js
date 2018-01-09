import React, {Component} from "react";
import {
  StyleSheet,
  View,
} from 'react-native';

export default class Square extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: 'red'
    };
    console.log('Square background red');
  }
  componentWillMount() {
    this.setState({ backgroundColor: 'green'});
    console.log('Square Will Mount background green');
  }

  componentWillUnmount() {
    this.setState({ backgroundColor: 'red'});
    console.log('Square Will Unmount background red');
  }

  render() {
    return (<View style={[styles.Square, {backgroundColor: this.state.backgroundColor}]} />);
  }
}

const styles = StyleSheet.create({
  Square: {
    marginTop: 10,
    height: 100,
    width: 100
  },
});