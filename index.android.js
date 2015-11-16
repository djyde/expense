'use strict';

import React from 'react-native'

// const Toolbar = require('./app/components').Toolbar

import {
  Toolbar
} from './app/components'

const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

class Expense extends React.Component {
  render() {
    return (
      <View>
        <Toolbar></Toolbar>
      </View>
    );
  }
};

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('Expense', () => Expense);
