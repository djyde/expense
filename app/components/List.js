'use strict'

import React from 'react-native'
import config from '../../package.json'

const {
  StyleSheet,
  ListView,
  Text,
  View
} = React

export default class List extends React.Component {
  constructor(props){
    super(props)
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    let fakeData = [
      {
        type: 'tranport',
        cost: 12
      },
      {
        type: 'eat',
        cost: 30
      }
    ]

    this.state = {
      dataSource: ds.cloneWithRows(fakeData),
    }
  }

  _renderItem(item){
    return (
      <View>
        <Text>{ item.type }</Text>
        <Text>{ item.cost }</Text>
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
  
})
