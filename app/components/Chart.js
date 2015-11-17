'use strict'

import React from 'react-native'

import { Expenses } from '../models'

const {
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} = React

export default class Chart extends React.Component {
  onPress(){
    Expenses.add({
      type: 'Transport',
      expense: 12,
      createdAt: Date.now()
    })
  }
  render(){
    return (
      <TouchableHighlight onPress={this.onPress}>
        <View style = { styles.chart }>
          <Text style = { styles.center }>Chart</Text>
        </View>
      </TouchableHighlight>
      
    )
  }
}

const styles = StyleSheet.create({
  chart: {
    backgroundColor: '#2196F3',
    height: 150,
    borderBottomColor: '#619DED',
    borderBottomWidth: 4,
    justifyContent: 'center'
  },

  center: {
    textAlign: 'center',
    color: '#fff'
  },
})