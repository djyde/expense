/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Expense = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
});

var styles = StyleSheet.create({
});

AppRegistry.registerComponent('Expense', () => Expense);
