import React, { Component } from 'react';
import { View, Text, SafeAreaView, Button} from 'react-native';


export default class CallsScreen extends Component {

  openTabs = () => {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Calls Screen</Text>
       
      </SafeAreaView>
    );
  }
}