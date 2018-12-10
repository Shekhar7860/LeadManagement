import React, { Component } from 'react';
import { View, Text,Button,Platform, FlatList, PermissionsAndroid, TextInput,TouchableOpacity, Image,  SafeAreaView } from 'react-native';
import Contacts from 'react-native-contacts';


export default class ContactsScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
        phoneContacts: " "
      };
      this.arrayholder = []
    
}

componentDidMount = () =>{
  const {navigation} = this.props;
navigation.addListener ('willFocus', () =>
Platform.OS == "android" ? this.getAndroidContacts() : this.getIOSContacts()
);
   
}

searchFilterFunction = text => {
  const newData = this.arrayholder.filter(item => {
    const itemData = `${item.familyName.toUpperCase()}  ${item.givenName.toUpperCase()} `;
    const textData = text.toUpperCase();
    return itemData.indexOf(textData) > -1;
  });
  this.setState({
    phoneContacts: newData
  });
}; 


async getAndroidContacts (){
  const granted = await PermissionsAndroid.check( PermissionsAndroid.PERMISSIONS.READ_CONTACTS );
  console.log('permissions', granted)
  if (granted) {
    Contacts.getAll((err, contacts) => {
      if (err) throw err;
     
      // contacts returned
      console.log(contacts)
      this.setState({ phoneContacts : contacts})
      this.arrayholder =  contacts;
    })
  } 
  else {
    console.log( "Contacts Permission denied" )
  }
 }

 getIOSContacts = () => {
  Contacts.getAll((err, contacts) => {
    if (err) throw err;
   
    // contacts returned
    console.log(contacts)
    this.setState({ phoneContacts : contacts})
    this.arrayholder =  contacts;
  })
 }

 

  render() {
    return (
      <SafeAreaView style={styles.topContactContainer}>
        <View style={styles.toolbar}>
                    <Text style={styles.toolbarButton}></Text>
                    <Text style={styles.toolbarTitle}>Contacts</Text>
                    <Text style={styles.toolbarButton}>Import</Text>
        </View>
        <View style={styles.itemsCenter}>
        <View style={styles.searchSection}>
        <Image source={require('../images/search.png')}  style={styles.searchIcon}/>
       
        <TextInput
        placeholder="Search"
        returnKeyType="done"
        style={styles.textInputFullWidth}
        onChangeText={text => this.searchFilterFunction(text)}
        />
      
        </View>
        </View>

        <FlatList        
        data={this.state.phoneContacts}          
        renderItem={({ item }) => ( 
          <View style={styles.itemsCenter}>
          <View style={styles.contactsSection}>
            <View style={styles.alphabetViewWidth}>
            <TouchableOpacity
            style={styles.alphabet}
             >
             <Text style={styles.boldWhiteText}>A</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.NameViewWidth}>
            <Text>{item.givenName} {item.familyName}</Text>
            <Text>20 Days Ago</Text>
            </View>
            <View style={styles.alphabetAlignViewWidth}>
            </View>
        </View>
        </View>
     
      
        
     )}          
     keyExtractor={item => item.email}  
                          
  />            
       
      
      </SafeAreaView>
    );
  }
}