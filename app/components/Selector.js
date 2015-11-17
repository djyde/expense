'use strict'

import React from 'react-native'

import utils from '../utils'

const {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
} = React

export default class Selector extends React.Component {
  constructor(props){
    super(props)
  }

  render(){

    let getType = utils.expensesType.map((type) => {
      return (
        <TypeItem name={ type.name } icon={ type.icon }/>
      )
    })

    return (
      <View style={ styles.container }>
        { getType }
      </View>
    )
  }
}

class TypeItem extends React.Component {
  render(){
    return (
      <View style={ styles.typeContainer }>
        <View style={ styles.center }>
          <Image source={ this.props.icon }/>
        </View>
        <Text style={ {textAlign: 'center'} }>{ this.props.name }</Text>
      </View>
    )
  }
}

let typeContainerWidth = Dimensions.get('window').width / 4

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  typeContainer: {
    padding: 14,
    width: typeContainerWidth
  },
  center: {
    flex: 1,
    alignItems: 'center'
  }
})