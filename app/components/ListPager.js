'use strict'

import React from 'react-native'

import List from './List'
import Total from './Total'

const {
  StyleSheet,
  ListView,
  Text,
  View,
  ViewPagerAndroid
} = React

export default class ListPager extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      selectedPage: 0
    }
  }

  render(){
    const context = this

    function onPageSelected(event){
      context.setState({
        selectedPage: event.nativeEvent.position
      })
    }

    return (
      <View
        style={ styles.listPager }>
        <View style = { styles.flexRow }>
          <Total number="44.3" date="Aug 1, 2015" active={ this.state.selectedPage === 0 }></Total>
          <Total number="770" date="Aug" active={ this.state.selectedPage === 1 }></Total>
        </View>

        <ViewPagerAndroid 
          style={ styles.viewPager }
          initialPage={0} 
          onPageSelected={ onPageSelected }>
          <View style={ styles.full }>
            <List></List>
          </View>
          <View style={ styles.full }>
            <List></List>
          </View>
        </ViewPagerAndroid>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listPager: {
    flex: 1
  },
  viewPager: {
    flex: 1
  },
  flexRow: {
    flexDirection: 'row'
  },
})