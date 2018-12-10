import React, { Component } from 'react';
import { View, Text,Button, Platform, PermissionsAndroid, TextInput,Image,  SafeAreaView } from 'react-native';
import ContactsWrapper from 'react-native-contacts-wrapper';
export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
        selectedName: " ",
        selectedPhone: " "
      };
    }


    async getAndroidContacts (){
     try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            {
              'title': 'Phone Contacts',
              'message': 'Allow lead management to read phone contacts '
            }
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            ContactsWrapper.getContact()
                  .then((contact) => {
                      // Replace this code
                      console.log(contact);
                      this.setState({selectedName : contact.name})
                      this.setState({selectedPhone : contact.phone})
                  })
                  .catch((error) => {
                      console.log("ERROR CODE: ", error.code);
                      console.log("ERROR MESSAGE: ", error.message);
                  });
          } 
          else {
            console.log("Contacts permission denied")
          }
        } catch (err) {
          console.warn(err)
        }
    }

    getIOSContacts = () =>{
      ContactsWrapper.getContact()
      .then((contact) => {
          // Replace this code
          console.log(contact);
          this.setState({selectedName : contact.name})
          this.setState({selectedPhone : contact.phone})
      })
      .catch((error) => {
          console.log("ERROR CODE: ", error.code);
          console.log("ERROR MESSAGE: ", error.message);
      });
    }


     componentDidMount() {
      Platform.OS == "android" ? this.getAndroidContacts() : this.getIOSContacts()  
  }

 
  onButtonPress = () => {
    this.props.navigation.navigate('Messages')
  }

  
 
  render() {
    return (
      <SafeAreaView>
        <View style={styles.rowContentAlign}>
            <View style={styles.emptyContentWidth}></View>
            <View style={styles.staticNameWidth}><Text>Selected Name</Text></View>
            <View style={styles.colonContentWidth}><Text>-</Text></View>
            <View style={styles.dynamicNameWidth}><Text>{this.state.selectedName}</Text></View>
        </View>
        <View style={styles.rowContentAlign}>
            <View style={styles.emptyContentWidth}></View>
            <View  style={styles.staticNameWidth}><Text>Selected Phone</Text></View>
            <View style={styles.colonContentWidth}><Text>-</Text></View>
            <View style={styles.dynamicNameWidth}><Text>{this.state.selectedPhone}</Text></View>
        </View>
      </SafeAreaView>
    );
  }
}