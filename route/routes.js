import React from 'react';
import {ChooserUI} from '../components/chooser';
import { TabNavigator,StackNavigator,DrawerNavigator,DrawerItems,SafeAreaView } from  'react-navigation';

import { ClassSchedule,ExamSchedule } from './../screen/myscreens';



let cstack = StackNavigator({
  chome:{screen:ClassSchedule}
});


let estack = StackNavigator({
  ehome:{screen:ExamSchedule}
});

const RootT = TabNavigator({
	Home: {screen: cstack },
	Exam: {screen: estack},
  	Tung: {screen: ChooserUI},
},{
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,} );

export const Root = StackNavigator({
  Home:{screen:RootT}
},{
headerMode:'none'
})