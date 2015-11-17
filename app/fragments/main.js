'use strict';

import React from 'react-native'
import MK from 'react-native-material-kit'

const {
  MKButton
} = MK

import {
  Toolbar,
  Navigator,
  Chart,
  ListPager
} from '../components'

const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ViewPagerAndroid
} = React;

export default class Main extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      selectedPage: 0
    }
  }


  render() {
    const context = this

    function newExpense(){
      context.props.navigator.push({
        name: 'detail'
      })
    }

    const FAB = MKButton.coloredFab()
      .withStyle(styles.fab)
      .withOnPress(newExpense)
      .build()



    return (
      <View style = { styles.main }>

        <Toolbar></Toolbar>
        <Chart></Chart>

        <ListPager selectedPage={ this.state.selectedPage }></ListPager>
        <FAB>
          <Image source={ require('../images/ic_add.png') } />
        </FAB>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column'
  },

  flexColumn: {
    flex: 1,
    flexDirection: 'column'
  },

  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#6EAAF2'
  }
});
