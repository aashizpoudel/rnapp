import React from 'react';
import { StyleSheet, Text, View,Picker } from 'react-native';
import { List,ListItem } from  'react-native-elements';

// import { StackNavigator } from 'react-navigation';



export class HomeUi extends React.Component{
constructor(props) {
    super(props);
    this.state = { today : '1'};
    
    // this.state = { loading: true };
    // fetchSchedules({faculty:'BME',year:'II',day:'1'},(datay)=>this.setState({data:datay,loading:false}));
  }
	componentDidMount(){
  		this.props.fetch(this.props.meta);
  	
  		// this.props.get(data);
  	}
	render(){
		let data = this.props.data[this.state.today];
			return(
				<View>
					<View style={{
						marginTop:15,borderColor:'blue'}
					}>
						<Picker > 
							<Picker.Item value='1' label='Sunday'/>
						</Picker>
					</View>
					<View>
						{this.props.loaded == true ?
							(<List>
							{ data.map(
									(l,i)=> 
									<ListItem key={i} title={l.class} subtitle={l.from} />

								)}
							</List>) : <Text>Not Loaded!!</Text>}
						</View>
					</View>
					);
		}
}


const styles= StyleSheet.create({
	header:{
		flex:1,
		marginTop:20,
		marginBottom:20,
	},
});