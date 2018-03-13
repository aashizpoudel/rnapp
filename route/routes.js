
import {ChooserUI} from '../components/chooser';
import { TabNavigator,StackNavigator } from  'react-navigation';

import { ClassSchedule,ExamSchedule, Chooser } from './../screen/myscreens';

import {constants} from './../libs/constants';




let cstack = StackNavigator({
  chome:{screen:ClassSchedule}
},{navigationOptions:{title:'Class Schedule',headerStyle: {
        backgroundColor: constants.primaryColor,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },}});


let estack = StackNavigator({
  ehome:{screen:ExamSchedule}
},{navigationOptions:{title:'Exam Schedule',headerStyle: {
        backgroundColor: constants.primaryColor,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },}});

const RootT = TabNavigator({
	Home: {screen: cstack },
	Exam: {screen: estack},
  Choose: {screen: Chooser},
},{
    tabBarOptions:{
      style:{
        backgroundColor:constants.primaryColor,
      }
    }
 ,tabBarPosition:'bottom',
    swipeEnabled:false,
});

export const Root = StackNavigator({
  Home:{screen:RootT}
},{
headerMode:'none'
})