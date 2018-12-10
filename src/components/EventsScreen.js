import React, { Component } from 'react';
import { View, Text, SafeAreaView,ScrollView, Image, TouchableOpacity} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab'


export default class EventsScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedIndex: 1
          };
      
    }

    handleIndexChange = (index) => {
        this.setState({
          ...this.state,
          selectedIndex: index
        });
        console.log("index", this.state.selectedIndex)
      }

    addEventScreen = () => {
    this.props.navigation.navigate('AddEvent');
    }
  

  render() {
    return (
      <SafeAreaView>
              <View style={styles.toolbar}>
                    <Text style={styles.toolbarButton}></Text>
                    <Text style={styles.toolbarTitle}>Event</Text>
                    <Text style={styles.toolbarButton}  onPress={() => this.addEventScreen()}>  <Image style={styles.headerIcon} source={require('../images/add.png')} /></Text>
                </View>
                
        
          <View style={{alignItems:"center"}}>
         <View style={{backgroundColor: 'rgba(52, 52, 52, 0.8)', width:"90%", marginTop:5}}>
         <SegmentedControlTab
            tabStyle={{ borderWidth :1,
            borderColor: 'white'}}
            tabTextStyle={{color:'black'}}
            activeTabTextStyle={{color:'blue'}}
               activeTabStyle = {{ borderBottomWidth :1,
                borderBottomColor: 'blue', backgroundColor:"white"}}
                    values={['Day', 'Week', 'Month']}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={this.handleIndexChange}
                    />
                   
                    </View>
                    </View>
                    {
                        (this.state.selectedIndex == 1) ? 
            <ScrollView contentContainerStyle={styles.itemsCenter}>
            <View style={styles.centerContentWidth}>
                <View style={styles.rowAlign}>
                <View style={styles.imageViewWidth}>
                <Image source={require('../images/clock.png')}  style={styles.icon}/>
                </View>
                <View style={styles.emptyViewWidth}>
                </View>
                <View style={styles.eventTimeViewWidth}>
                <Text>10:00 AM</Text>
                </View>
                <View style={styles.emptyViewWidth2}>
                </View>
                <View style={styles.leftTextViewWidth}>
                <Text> Thursday, Nov 15</Text>
                </View>
                </View>
                <View style={styles.rowAlign}>
                <View style={styles.imageViewWidth}>
                
                </View>
                <View style={styles.emptyViewWidth}>
                </View>
                <View style={styles.eventTextViewWidth}>
                <Text style={styles.designTextFont}>Design Stand-Up</Text>
                </View>
                <View style={styles.emptyViewWidthNew}>
                </View>
                <View style={styles.leftTextViewWidth}>
                <TouchableOpacity
   style={styles.imageRoundButton}
 >
 <Image source={require('../images/share.png')}  style={styles.icon}/>
 
 </TouchableOpacity>
                </View>
                </View>
               
                
                <View style={styles.rowAlign}>
                <View style={styles.firstBlankWidthNewImage}>
                </View>
                <View style={styles.imageViewWidth}>
                <TouchableOpacity
   style={styles.transparentRoundButton}
 >
 <Text style={styles.textWhite}>$</Text>
 
 </TouchableOpacity>
                </View>
                <View style={styles.TextImageView}>
                <Text style={styles.noTextSpace}> You have 1 event   </Text>
                </View>
                <View style={styles.blankViewWidth}>
                </View>
                
                </View>

                 <View style={styles.rowAlign}>
                <View style={styles.imageViewWidth}>
                
                </View>
                <View style={styles.emptyViewWidth}>
                </View>
                <View style={styles.eventTextViewWidth}>
                   <View style={{flexDirection:"row"}}>
                <TouchableOpacity
   style={styles.transparentRoundButton}
 >
 <Text style={styles.textWhite}>A</Text>
 
 </TouchableOpacity>
 <TouchableOpacity
   style={styles.blueRoundButton}
 >
 <Text style={styles.textWhite}>B</Text>
 
 </TouchableOpacity>
 <TouchableOpacity
   style={styles.transparentRoundButton}
 >
 <Text style={styles.textWhite}>C</Text>
 
 </TouchableOpacity>
 <TouchableOpacity
   style={styles.blueBorderRoundButton
     }
 >
 <Text style={styles.textBlue}>-2</Text>
 
 </TouchableOpacity>
 </View>   
                </View>
                <View style={styles.emptyViewWidthNew}>
                </View>
                <View style={styles.leftTextViewWidth}>
                </View>
                </View>
            </View>

             <View style={styles.centerContentWidth}>
                <View style={styles.rowAlign}>
                <View style={styles.imageViewWidth}>
                <Image source={require('../images/clock.png')}  style={styles.icon}/>
                </View>
                <View style={styles.emptyViewWidth}>
                </View>
                <View style={styles.eventTimeViewWidth}>
                <Text>10:00 AM</Text>
                </View>
                <View style={styles.emptyViewWidth2}>
                </View>
                <View style={styles.leftTextViewWidth}>
                <Text> Thursday, Nov 15</Text>
                </View>
                </View>
                <View style={styles.rowAlign}>
                <View style={styles.imageViewWidth}>
                
                </View>
                <View style={styles.emptyViewWidth}>
                </View>
                <View style={styles.eventTextViewWidth}>
                <Text style={styles.designTextFont}>Design Stand-Up</Text>
                </View>
                <View style={styles.emptyViewWidthNew}>
                </View>
                <View style={styles.leftTextViewWidth}>
                <TouchableOpacity
   style={styles.imageRoundButton}
 >
 <Image source={require('../images/share.png')}  style={styles.icon}/>
 
 </TouchableOpacity>
               
                </View>
                </View>
               
                
                <View style={styles.rowAlign}>
                <View style={styles.firstBlankWidthNewImage}>
                </View>
                <View style={styles.imageViewWidth}>
                <TouchableOpacity
   style={styles.transparentRoundButton}
 >
 <Text style={styles.textWhite}>$</Text>
 
 </TouchableOpacity>
                </View>
                <View style={styles.TextImageView}>
                <Text style={styles.noTextSpace}> You have 1 event   </Text>
                </View>
                <View style={styles.blankViewWidth}>
                </View>
                
                </View>

                 <View style={styles.rowAlign}>
                <View style={styles.imageViewWidth}>
                
                </View>
                <View style={styles.emptyViewWidth}>
                </View>
                <View style={styles.eventTextViewWidth}>
                   <View style={{flexDirection:"row"}}>
                <TouchableOpacity
   style={styles.transparentRoundButton}
 >
 <Text style={styles.textWhite}>A</Text>
 
 </TouchableOpacity>
 <TouchableOpacity
   style={styles.blueRoundButton}
 >
 <Text style={styles.textWhite}>B</Text>
 
 </TouchableOpacity>
 <TouchableOpacity
   style={styles.transparentRoundButton}
 >
 <Text style={styles.textWhite}>C</Text>
 
 </TouchableOpacity>
 <TouchableOpacity
   style={styles.blueBorderRoundButton
     }
 >
 <Text style={styles.textBlue}>-2</Text>
 
 </TouchableOpacity>
 </View>   
                </View>
                <View style={styles.emptyViewWidthNew}>
                </View>
                <View style={styles.leftTextViewWidth}>
                </View>
                </View>
            </View>
            <View style={styles.centerContentWidth}>
                <View style={styles.rowAlign}>
                <View style={styles.imageViewWidth}>
                <Image source={require('../images/clock.png')}  style={styles.icon}/>
                </View>
                <View style={styles.emptyViewWidth}>
                </View>
                <View style={styles.eventTimeViewWidth}>
                <Text>10:00 AM</Text>
                </View>
                <View style={styles.emptyViewWidth2}>
                </View>
                <View style={styles.leftTextViewWidth}>
                <Text> Thursday, Nov 15</Text>
                </View>
                </View>
                <View style={styles.rowAlign}>
                <View style={styles.imageViewWidth}>
                
                </View>
                <View style={styles.emptyViewWidth}>
                </View>
                <View style={styles.eventTextViewWidth}>
                <Text style={styles.designTextFont}>Design Stand-Up</Text>
                </View>
                <View style={styles.emptyViewWidthNew}>
                </View>
                <View style={styles.leftTextViewWidth}>
                <TouchableOpacity
                  style={styles.imageRoundButton}
                >
                <Image source={require('../images/share.png')}  style={styles.icon}/>
                </TouchableOpacity>
                </View>
                </View>
               
                
                <View style={styles.rowAlign}>
                <View style={styles.firstBlankWidthNewImage}>
                </View>
                <View style={styles.imageViewWidth}>
                <TouchableOpacity
   style={styles.transparentRoundButton}
 >
 <Text style={styles.textWhite}>$</Text>
 
 </TouchableOpacity>
                </View>
                <View style={styles.TextImageView}>
                <Text style={styles.noTextSpace}> You have 1 event   </Text>
                </View>
                <View style={styles.blankViewWidth}>
                </View>
                
                </View>

                 <View style={styles.rowAlign}>
                <View style={styles.imageViewWidth}>
                
                </View>
                <View style={styles.emptyViewWidth}>
                </View>
                <View style={styles.eventTextViewWidth}>
                   <View style={{flexDirection:"row"}}>
                <TouchableOpacity
   style={styles.transparentRoundButton}
 >
 <Text style={styles.textWhite}>A</Text>
 
 </TouchableOpacity>
 <TouchableOpacity
   style={styles.blueRoundButton}
 >
 <Text style={styles.textWhite}>B</Text>
 
 </TouchableOpacity>
 <TouchableOpacity
   style={styles.transparentRoundButton}
 >
 <Text style={styles.textWhite}>C</Text>
 
 </TouchableOpacity>
 <TouchableOpacity
   style={styles.blueBorderRoundButton
     }
 >
 <Text style={styles.textBlue}>-2</Text>
 
 </TouchableOpacity>
 </View>   
                </View>
                <View style={styles.emptyViewWidthNew}>
                </View>
                <View style={styles.leftTextViewWidth}>
                </View>
                </View>
            </View>
            </ScrollView>
                        
                        
                        : (this.state.selectedIndex == 2) ? <Text>Month</Text> : <Text>Day</Text>
                    }
               
                  
                  
      </SafeAreaView>
    );
  }
}