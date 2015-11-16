'use strict'

import React from 'react-native'
import config from '../../package.json'

const {
  StyleSheet,
  ToolbarAndroid
} = React

export default class Toolbar extends React.Component {
  render(){
    return (
      <ToolbarAndroid
        style = { styles.toolbar }
        titleColor = { this.props.titleColor || '#fff' }
        logo = { this.props.logo }
        title = { this.props.title || config.name } 
      />
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: '#6EAAF2'
  }
})

// export default Toolbar