'use strict'

import React from 'react-native'

const {
  View,
  StyleSheet,
  Text
} = React

export default class Total extends React.Component {
  render(){
    return (
      <View style = {[ styles.total, this.props.active ? styles.active : '' ]}>
        <Text style = {[ styles.center, styles.number ]}> { this.props.number } </Text>
        <Text style = {[ styles.center, styles.date ]}> { this.props.date } </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  total: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#C7C7C7',
    height: 80,
    justifyContent: 'center'
  },

  center: {
    textAlign: 'center'
  },

  number: {
    fontSize: 24
  },

  active: {
    borderBottomColor: '#6098ED',
    borderBottomWidth: 1
  }
})