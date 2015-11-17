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

export default class Detail extends React.Component {

  constructor(props){
    super(props)

  }

  render() {
    return (
      <View style = { styles.detail }>
        <Text>Detail</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({

});
