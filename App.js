
import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/component/header';
import AlbumsList from './src/component/AlbumList';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header HeaderText={'Albums!'} />
        <AlbumsList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
}); 
 