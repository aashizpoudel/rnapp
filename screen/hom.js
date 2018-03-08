import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, ListItem } from  'react-native-elements';


const data = {meta:{},data:
[
{
from:'12:99',to:'13:55',class:'Class 1'
},
{
from:'12:99',to:'13:55',class:'Class 2'
},
{
from:'12:99',to:'13:55',class:'Class 3'
},
{
from:'12:99',to:'13:55',class:'Class 4'
},
]}
export class Hom extends React.Component{
	render(){
		return (
			<List>
			{
				data.data.map((elem,i)=>(<ListItem key={i} title={elem.class} subtitle={elem.from + " to " +elem.to}/>)
					)
				}
			</List>
			);
	}
}