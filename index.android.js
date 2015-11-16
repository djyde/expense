'use strict';

import React from 'react-native'

// const Toolbar = require('./app/components').Toolbar

import {
  Toolbar,
  Chart,
  Total
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
        <Chart></Chart>

        <View style = { styles.flex }>
          <Total number="44.3" date="Aug 1, 2015" active></Total>
          <Total number="770" date="Aug"></Total>
        </View>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    flexDirection: 'row'
  }
});

AppRegistry.registerComponent('Expense', () => Expense);
