'use strict';

import React from 'react-native'

import Router from './app/router'

import {
  Toolbar,
  Chart,
  Total, 
  ListPager
} from './app/components'

const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ViewPagerAndroid
} = React;

class Expense extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      selectedPage: 0
    }
  }

  render() {
    let initialRoute = {
      name: 'detail',
      index: 0
    }

    return (
      <Navigator
        configureScene={() => Navigator.SceneConfigs.FadeAndroid}
        initialRoute = { initialRoute }
        renderScene = { Router }
      />
    );
  }
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: 'column'
  },

  flexColumn: {
    flex: 1,
    flexDirection: 'column'
  }
});

AppRegistry.registerComponent('Expense', () => Expense);
