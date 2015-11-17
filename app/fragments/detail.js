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
  ListPager,
  Selector
} from '../components'

const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  Image,
  TextInput,
  TouchableOpacity
} = React;

export default class Detail extends React.Component {

  constructor(props){
    super(props)

  }

  render() {
    return (
      <View style = { styles.detail }>
        <View style={ styles.toolbar }>
          <View style={ styles.flex }>
          </View>
          <View style={ styles.flex }>
            <TextInput 
              placeholder="￥"
              keyboardType="numeric"
              autoFocus={ true }
              placeholderTextColor="#fff"
              underlineColorAndroid="#6EAAF2"
              textAlign="center"
              style={[ styles.textInput ]}
            />
          </View>
          <View style={[ styles.flex, styles.icon ]}>
            <TouchableOpacity>
              <Image source={ require('../images/ic_done.png') }/>
            </TouchableOpacity>
          </View>
        </View>
        
        <Selector></Selector>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#6EAAF2',
    height: 56,
    flex: 1,
    flexDirection: 'row',
  },
  flex: {
    flex: 1,
    alignItems: 'center'
  },
  textInput: {
    justifyContent: 'center',
    flex: 1,
    width: 200,
    fontSize: 18,
    color: '#fff' // TODO this is a bug of React Native https://github.com/facebook/react-native/issues/3742
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 12
  }
});
