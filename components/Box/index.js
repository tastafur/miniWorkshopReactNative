import React, {Component} from "react";
import {
  StyleSheet,
  View,
} from 'react-native';

export default class Box extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: 'red'
    };
  }
  componentWillMount() {
    this.setState({ backgroundColor: 'green'})
  }

  componentWillUnmount() {
    this.setState({ backgroundColor: 'red'})
  }

  render() {
    return (<View style={[styles.box, {backgroundColor: this.state.backgroundColor}]} />);
  }
}

const styles = StyleSheet.create({
  box: {
    marginTop: 10,
    height: 100,
    width: 100
  },
});