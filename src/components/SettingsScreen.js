import React, { Component } from 'react';
import { View, Text, SafeAreaView} from 'react-native';


export default class SettingsScreen extends Component {

  

  render() {
    return (
      <SafeAreaView>
        <View style={styles.contentCenterAlign}>
        <Text>This is Settings Screen</Text>
        </View>
      </SafeAreaView>
    );
  }
}