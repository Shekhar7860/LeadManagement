import React, { Component } from 'react';
import { View, Text, SafeAreaView, Button} from 'react-native';


export default class LoginScreen extends Component {

  openTabs = () => {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Login Screen</Text>
        <Button title="GoToTabs"  onPress={() => this.openTabs()}></Button>
      </SafeAreaView>
    );
  }
}