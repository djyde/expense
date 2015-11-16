'use strict';

import React from 'react-native'

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
    return (
      <View style = { styles.app }>
        <Toolbar></Toolbar>
        <Chart></Chart>

        <ListPager selectedPage={ this.state.selectedPage }></ListPager>

      </View>
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
