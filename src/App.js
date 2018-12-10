/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StackNavigator,  createBottomTabNavigator} from 'react-navigation';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import LoginScreen from './components/LoginScreen';
import SettingsScreen from './components/SettingsScreen';
import HomeScreen from './components/HomeScreen';
import ContactsScreen from './components/ContactsScreen';
import CallsScreen from './components/CallsScreen';
import AddContactScreen from './components/AddContactScreen';
import AddEventsScreen from './components/AddEventsScreen';
import EventsScreen from './components/EventsScreen';



// const StackApp = createStackNavigator({
//   Home: {screen: HomeScreen},
//   Profile: {screen: LoginScreen},
// });
const BottomTabs = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel:"Home",
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./images/home.png')} />
      )
    }),
  },
  Contacts: {
    screen: ContactsScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel:"Contacts",
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./images/contact.png')} />
      )
    }),
  },
  Add: {
    screen: AddContactScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel:"Add",
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./images/add.png')} />
      )
    }),
  },
  Events: {
    screen: EventsScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel:"Fav",
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./images/star.png')} />
      )
    }),
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel:"Settings",
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./images/setting.png')} />
      )
    }),
  },
},
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showLabel: false,
      borderBottomWidth:1,
      activeBackgroundColor:"#3498db",
     
      inactiveTintColor:'#D3D3D3',
      style:{
          
          
      },
      
      
    }
 
  
})

const Stack = StackNavigator({
  Home: {
    screen:  BottomTabs
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  Calls: {
    screen: CallsScreen,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  AddEvent: {
    screen: AddEventsScreen,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  Register: {
    screen: ContactsScreen,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  
});
// const Stylelist = createBottomTabNavigator({
//   Login: {
//     screen: LoginScreen,
//     navigationOptions: ({ navigation }) => ({
//       header: null,
//     }),
//   },
//   Register: {
//     screen: SettingsScreen,
//     navigationOptions: ({ navigation }) => ({
//       header: null,
//     }),
//   }
// });

export default class App extends Component {
  render() {
    return (
      <  Stack
    />
   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
