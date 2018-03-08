import React from 'react';
import {Provider} from 'react-redux';
import HomeUi from './classaction';
import ExamUi from './examaction';
import configureStore from './../../store/configureStore';

const store = configureStore();
export class Class extends React.Component {

	render(){
		return(
		<Provider store={store}>
			<HomeUi/>
		 </Provider> )
	}
}

export class Exam extends React.Component {

	render(){
		return(
		<Provider store={store}>
			<ExamUi/>
		 </Provider> )
	}
}