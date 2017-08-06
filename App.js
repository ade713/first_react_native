//App entry point, place code here

//Import a library to help create a Component
import React from 'react';
import { Text,
         View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a Component
export default class App extends React.Component {
  render() {
    return (
      <View style={ { flex: 1 } }>
        <Header headerText={ 'Albums' }/>
        <AlbumList />
      </View>
    );
  }
}

// Render to device
// AppRegistry.registerComponent('CoolApp', () => App);
