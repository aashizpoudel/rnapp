import React, { Component } from 'react';

import { Text, View, StyleSheet,Picker } from 'react-native';
// import { Constants } from 'expo';
import {constants} from './../libs/constants';
import { Button } from 'react-native-elements'; // Version can be specified in package.json

const data = [ 
{department:'BME',years:['I','II','III','IV']},
{department:'BAG',years:['I','II','III','IV']},
{department:'BCT',years:['I','II','III','IV']},

];


export  class ChooserUI extends Component {
	constructor(props){
		super(props);
		this.state= {index:1,department:this.props.meta.department, year:this.props.meta.year};
	}
  
  render() {
    // console.log(this.state);
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Choose your Department!!
        </Text>
       
        <Text>Department</Text>
          <Picker
               selectedValue={this.state.department}
                onValueChange={(itemValue,itemIndex) => this.setState({index: itemIndex,department:itemValue})}>

                {data.map((l,i)=><Picker.Item key={i} label={l.department} value={l.department} /> ) }
                
          </Picker>
          <Text>Year</Text>
          <Picker selectedValue={this.state.year}
                onValueChange={(itemValue) => {this.setState({ year:itemValue})}}>
                {data[this.state.index].years.map((l,i)=><Picker.Item key={i} label={l} value={l} />)}
                
          </Picker>
        <Button
   title='Choose' 
   onPress={()=>{
     this.props.setMeta({department:this.state.department,year:this.state.year});
    
   }}
   buttonStyle={{backgroundColor:constants.primaryColor}} textStyle={{fontWeight:'bold' ,color:'white'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    paddingRight:20,
    paddingLeft:20,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

