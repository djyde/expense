'use strict'

import React from 'react-native'
import config from '../../package.json'

import {
  Expenses
} from '../models'

const {
  StyleSheet,
  ListView,
  Text,
  View,
  Image
} = React

export default class List extends React.Component {
  constructor(props){
    super(props)

    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.state = {
      dataSource: ds.cloneWithRows([])
    }
  }

  componentDidMount(){
    this.fetchExpenses()
  }

  fetchExpenses(){
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    Expenses.get_all( (data) => {
      let items = Object.keys(data.rows).map( (key) => { return data.rows[key] } )
      items.reverse()
      this.setState({
        dataSource: ds.cloneWithRows(items)
      })
    })
  }

  _renderItem(item){

    let icon
    switch(item.type){
      case 'Transport':
        icon = require('../images/ic_transport.png')
        break;
      case 'Food':
        icon = require('../images/ic_local_dining.png')
        break;
    }

    return (
      <View style={ styles.container }>
        <View style={ styles.icon }>
          <Image source={ icon } />
        </View>
        <View style={ styles.detail }>
          <Text style={ styles.text }>{ item.type }</Text>
          <Text style={[ styles.expense, styles.text ]}>{ item.expense }</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={ this._renderItem }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    // flex: 1,
    padding: 12
  },
  detail: {
    // backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'row',
    padding: 12,
    paddingLeft: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#c7c7c7'
  },

  expense: {
    textAlign: 'right'
  },

  text: {
    flex: 1,
    fontSize: 18,
    color: '#444444'
  }
})
