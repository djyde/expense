'use strict'

import React from 'react-native'

const {
  View,
  StyleSheet,
  Text
} = React

export default class Chart extends React.Component {
  render(){
    return (
      <View style = { styles.chart }>
        <Text style = { styles.center }>Chart</Text>
      </View>
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