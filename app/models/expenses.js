import React from 'react-native'

import RNDB from 'react-native-db-models'

const {
  AsyncStorage
} = React

const KEY = 'Expense:Expenses'

export default new RNDB.create_db(KEY)