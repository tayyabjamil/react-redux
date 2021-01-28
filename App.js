
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {Provider} from 'react-redux';
import Input from './Screens/Input'
import List from './Screens/List'
import configureStore from './ReduxStore/store';
const store = configureStore()
const App = () => {
  return (
    <Provider store={store}>
    <Input />
   </Provider>
   );
};


export default App;
