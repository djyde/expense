import Main from './fragments/main'
import Detail from './fragments/detail'

import React from 'react-native'

const {
  BackAndroid
} = React



export default function router(route, navigator){

  BackAndroid.addEventListener('hardwareBackPress', () => {
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop()
      return true
    } else {
      return false
    }
  })

  switch(route.name){
    case 'main':
      return (
        <Main navigator = { navigator } />
      )
      break;
    case 'detail':
      return (
        <Detail navigator = { navigator } />
      )
      break;
  }
}