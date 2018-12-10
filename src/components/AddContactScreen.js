import React, { Component } from 'react';
import { View, Text, Button, Dimensions,  PermissionsAndroid,ScrollView, Platform, Alert, SafeAreaView , Image,TextInput }  from 'react-native';
import Contacts from 'react-native-contacts';
import styles from "../styles/styles";

export default class AddContactScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
       firstName: "",
       lastName: "",
       mobile : "",
       email : "",
       address : ""
      };
    }

  openTabs = () => {
    this.props.navigation.navigate('Calls');
  }
  
  async askAndroidPermission () {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
        {
          'title': 'Phone Contacts',
          'message': 'Allow lead management to write phone contacts '
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("permission granted")
      } 
      else {
        console.log("Contacts permission denied")
      }
    } catch (err) {
      console.warn(err)
    }
  }

  componentWillMount () {
    Platform.OS == "android" ? this.askAndroidPermission() : this.IOSPermission()  
    }

    IOSPermission = () => {
      console.log('already had write contact permission')
    }

 async addNewContact  ()  {
    console.log(this.state.firstName)
    console.log(this.state.lastName)
    console.log(this.state.mobile)
    console.log(this.state.email)
    console.log("address", this.state.address)
 if (this.state.firstName && this.state.lastName && this.state.mobile && this.state.email)
 {
    var newPerson = {
      emailAddresses: [{
        label: "work",
        email: this.state.email,
      }],
      familyName: this.state.lastName,
      givenName: this.state.firstName,
      phoneNumbers :[{
        label:"mobile",
        number : this.state.mobile
      }],
      postalAddresses : [{
        street: this.state.address,
        city: 'mohali',
        state: 'CA',
        region: 'CA',
        postCode: '90210',
        country: 'India',
        label: 'home'
      }]

      
    }
    Platform.OS == "android" ? this.addAndroidContacts(newPerson) : this.addIOSContacts(newPerson)  
    this.setState({firstName : " "})
    this.setState({lastName : " "})
    this.setState({mobile : " "})
    this.setState({email : " "})
    this.setState({address : " "})
  }
  else
  {
    Alert.alert("Please fill all details")
  }
  }

  async addAndroidContacts (newPerson) {
    const granted = await PermissionsAndroid.check( PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS );
    console.log('permissions', granted)
    if (granted) {
     Contacts.addContact(newPerson, (err) => {
        if (err) throw err;
        Alert.alert("Contact Added Successfully") 
      })
    } 
    else {
      console.log( "Contacts Permission denied" )
    }
  }

  async addIOSContacts (newPerson) {
     Contacts.addContact(newPerson, (err) => {
        if (err) throw err;
        Alert.alert("Contact Added Successfully")
      })
  
  }


  render() {
    return (
      <SafeAreaView style={styles.topContactContainer}>
          <View style={styles.toolbar}>
                    <Text style={styles.toolbarButton}></Text>
                    <Text style={styles.toolbarTitle}>New Contact</Text>
                    <Text style={styles.toolbarButton} onPress = {() => this.addNewContact()}>Save</Text>
                </View>
       
       <ScrollView >
      <View style={styles.viewWidth}>
        <View style={styles.textInputContainer}>
          <View style={styles.rowAlign}>
            <View style={styles.imageViewWidth}>
            <Image source={require('../images/user-name.png')}  style={styles.contactIcon}/>
            </View>
            <View style={styles.emptyViewWidth}>
            </View>
            <View style={styles.textViewWidth}>
            <TextInput  placeholder="First Name"  onChangeText={(text)=>this.setState({ firstName:text})}  returnKeyType="done"></TextInput>
            <View style={styles.textBorder}></View>
            </View>
            </View>
            <View style={styles.rowAlign}>
            <View style={styles.imageViewWidth}>
            <Image   style={styles.icon}/>
            </View>
            <View style={styles.emptyViewWidth}>
            </View>
            <View style={styles.textViewWidth}>
            <TextInput  placeholder="Last Name"  onChangeText={(text)=>this.setState({ lastName:text})}  returnKeyType="done"></TextInput>
            <View style={styles.textBorder}></View>
            </View>
            </View>
            <View style={styles.rowAlign}>
            <View style={styles.imageViewWidth}>
            <Image source={require('../images/phone.png')}  style={styles.contactIcon}/>
            </View>
            <View style={styles.emptyViewWidth}>
            </View>
            <View style={styles.textViewWidth}>
            <TextInput  placeholder="Phone Number"  onChangeText={(text)=>this.setState({ mobile:text})}  keyboardType="numeric"
                maxLength={10}
                returnKeyType="done"></TextInput>
            <View style={styles.textBorder}></View>
            </View>
            </View>
            <View style={styles.rowAlign}>
            <View style={styles.imageViewWidth}>
            <Image source={require('../images/mail.png')}  style={styles.contactIcon}/>
            </View>
            <View style={styles.emptyViewWidth}>
            </View>
            <View style={styles.textViewWidth}>
            <TextInput  placeholder="Email Address"  onChangeText={(text)=>this.setState({ email:text})}  returnKeyType="done"></TextInput>
            <View style={styles.textBorder}></View>
            </View>
            </View>
            <View style={styles.rowAlign}>
            <View style={styles.imageViewWidth}>
            <Image source={require('../images/status.png')}  style={styles.contactIcon}/>
            </View>
            <View style={styles.emptyViewWidth}>
            </View>
            <View style={styles.textViewWidth}>
            <TextInput  placeholder="Status"  onChangeText={(text)=>this.setState({ email:text})}  returnKeyType="done"></TextInput>
            <View style={styles.textBorder}></View>
            </View>
            </View>
            <View style={styles.rowAlign}>
            <View style={styles.imageViewWidth}>
            <Image source={require('../images/address.png')}  style={styles.contactIcon}/>
            </View>
            <View style={styles.emptyViewWidth}>
            </View>
            <View style={styles.textViewWidth}>
            <TextInput  placeholder="Address"  onChangeText={(text)=>this.setState({ address:text})}  returnKeyType="done"></TextInput>
            <View style={styles.textBorder}></View>
            </View>
            </View>
          </View>
        </View>
        </ScrollView>
       
      
      </SafeAreaView>
    );
  }
}