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
  ToolbarAndroid,
  Image,
  TextInput,

} = React;

export default class Detail extends React.Component {

  constructor(props){
    super(props)

  }

  render() {
    return (
      <View style = { styles.detail }>
        <View style={ styles.toolbar }>
          <TextInput 
            placeholder="How much"
            keyboardType="numeric"
            autoFocus={ true }
            placeholderTextColor="#ddd"
            underlineColorAndroid="#fff"
            style={ styles.textInput }
          />
        </View>
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
    justifyContent: 'center'
  },
  textInput: {
    width: 100,
    fontSize: 18,
    color: 'fff'
  }
});
