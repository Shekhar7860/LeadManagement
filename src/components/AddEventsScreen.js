import React, { Component } from 'react';
import { View, Text, Button, SafeAreaView ,Switch, Image,TextInput }  from 'react-native';
import styles from "../styles/styles";

export default class AddEventsScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: true
          };
      
    }


    goBack = () => {
      this.props.navigation.goBack();
    }

  openTabs = () => {
    this.props.navigation.navigate('Calls');
  }

  render() {
    return (
      <SafeAreaView>
          <View style={styles.toolbar}>
                    <Text style={styles.toolbarButton} onPress = {() => this.goBack()}><Image style={styles.headerIcon} source={require('../images/back.png')} /></Text>
                    <Text style={styles.toolbarTitle}>Create Event</Text>
                    <Text style={styles.toolbarButton}>Save</Text>
                </View>
              

      <View style={styles.viewWidth}>
        <View style={styles.textInputContainer}>
        <View style={styles.rowAlign}>
            <View style={styles.textTitleViewWidth}>
            <Text>Enter Title</Text>
            </View>
            <View style={styles.emptyViewWidth}>
            </View>
            <View style={styles.InputtitleViewWidth}>
            <TextInput  placeholder=" Name"  onChangeText={(text)=>this.setState({ email:text})}  returnKeyType="done"></TextInput>
            <View style={styles.textBorder}></View>
            </View>
            </View>
            <View style={styles.rowAlign}>
            <View style={styles.imageViewWidth}>
            <Image source={require('../images/calendar.png')}  style={styles.icon}/>
            </View>
            <View style={styles.emptyViewWidth}>
            </View>
            <View style={styles.textViewWidth}>
            <Text>Events</Text>
           
            </View>
          </View>
          <View style={styles.rowAlign}>
            <View style={styles.imageViewWidth}>
            </View>
            <View style={styles.emptyViewWidth}>
            </View>
            <View style={styles.textViewWidth}>
            <TextInput  placeholder="Email"  onChangeText={(text)=>this.setState({ email:text})}  returnKeyType="done"></TextInput>
            <View style={styles.textBorder}></View>
            </View>
          </View>
            <View style={styles.rowAlign}>
            <View style={styles.imageViewWidth}>
            <Image source={require('../images/clock.png')}  style={styles.icon}/>
            </View>
            <View style={styles.emptyViewWidth}>
            </View>
            <View style={styles.switchtextViewWidth}>
            <Text>All Day</Text>
            </View>
            <View style={styles.switchViewWidth}>
          
        <Switch
          value={ this.state.value }
          style={styles.switchWidth}
          onValueChange={(value) => this.setState({value})}
        />
            </View>
            </View>
            <View style={styles.rowAlignDate}>
            <View style={styles.imageViewWidth}>
           
            </View>
            <View style={styles.emptyViewWidth}>
            </View>
            <View style={styles.switchtextViewWidth}>
            <Text>Fri, Nov 16, 2018</Text>
            </View>
            <View >
            <Text>5:00 PM</Text>
            </View>
            </View>
            <View style={styles.rowAlignDate}>
            <View style={styles.imageViewWidth}>
           
            </View>
            <View style={styles.emptyViewWidth}>
            </View>
            <View style={styles.switchtextViewWidth}>
            <Text>Fri, Nov 16, 2018</Text>
            </View>
            <View >
            <Text>6:00 PM</Text>
            </View>
            </View>
            <View style={styles.rowAlign}>
            <View style={styles.imageViewWidth}>
            </View>
            <View style={styles.emptyViewWidth}>
            </View>
            <View style={styles.textViewWidth}>
            <View style={styles.textBorder}></View>
            </View>
            </View>
            <View style={styles.rowAlign}>
            <View style={styles.imageViewWidth}>
            <Image source={require('../images/location.png')}  style={styles.icon}/>
            </View>
            <View style={styles.emptyViewWidth}>
            </View>
            <View style={styles.textViewWidth}>
            <TextInput  placeholder="Add Location"  onChangeText={(text)=>this.setState({ email:text})}  returnKeyType="done"></TextInput>
            <View style={styles.textBorder}></View>
            </View>
            </View>
            <View style={styles.rowAlign}>
            <View style={styles.imageViewWidth}>
            <Image source={require('../images/note.png')}  style={styles.icon}/>
            </View>
            <View style={styles.emptyViewWidth}>
            </View>
            <View style={styles.textViewWidth}>
            <TextInput  placeholder="Add Note"  onChangeText={(text)=>this.setState({ email:text})}  returnKeyType="done"></TextInput>
            <View style={styles.textBorder}></View>
            </View>
            </View>
          </View>
        </View>
           
      
      </SafeAreaView>
    );
  }
}