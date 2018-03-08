import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, ListItem } from  'react-native-elements';
import {fetchSchedules} from './../libs/offline';

import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/actions';


const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
        log:state.log,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    	getConsole:(data)=>dispatch(console(data)),
        fetchData: (url) => dispatch(itemsFetchData(url)),
        fetch:(data) => {
        	dispatch(itemsIsLoading(true));
        	fetchSchedules({faculty:data.faculty,year:data.year,day:data.day},(datay)=> dispatch(itemsFetchDataSuccess(datay)));
        },
    };
};

export  class Home extends React.Component{
constructor(props) {
    super(props);
    // this.state = { loading: true };
    // fetchSchedules({faculty:'BME',year:'II',day:'1'},(datay)=>this.setState({data:datay,loading:false}));
  }

  componentWillMount(){
  		// this.props.fetch({faculty:'BME',year:'II',day:'1'});
  		this.props.getConsole('console');

  }

	render(){
		if(!this.state.loading){
			return (
					<List>

							{
								this.state.data.map((l,i)=>(
<ListItem key={i} title={l.class} subtitle={l.time}/>
									))
							}
					</List>

				);
		}
		return (
				<View><Text>Loading</Text></View>
			);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);