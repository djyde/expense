import Main from './fragments/main'
import Detail from './fragments/detail'

import React from 'react-native'

export default function router(route, navigator){
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