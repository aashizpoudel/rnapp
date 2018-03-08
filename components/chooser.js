import React, { Component } from 'react';
import { Text, View, StyleSheet,Picker } from 'react-native';
import { Constants } from 'expo';

import { Button } from 'react-native-elements'; // Version can be specified in package.json
const data = [ 
{department:'BME',years:['I','II','III','IV']},
{department:'BAG',years:['I','II','III','IV']},
{department:'BCT',years:['I','II','III','IV']},

];


export  class ChooserUI extends Component {
	constructor(props){
		super(props);
		this.state= {index:1,selected:{}};
	}
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Choose your Department!!
        </Text>
       
        <Text>Department</Text>
          <Picker
                selectedIndex={this.state.index}
                onValueChange={(itemValue,itemIndex) => this.setState({index: itemIndex,selected:{department:itemValue}})}>

                {data.map((l,i)=><Picker.Item key={i} label={l.department} value={l.department} /> ) }
                
          </Picker>
          <Text>Year</Text>
          <Picker 
                onValueChange={(itemValue) => this.setState({selected: {year:itemValue}})}>
                {data[this.state.index].years.map((l,i)=><Picker.Item key={i} label={l} value={l} />)}
                
          </Picker>
        <Button
   title='Choose' buttonStyle={{backgroundColor:'blue'}} textStyle={{fontWeight:'bold' ,color:'white'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    paddingTop: Constants.statusBarHeight,
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


