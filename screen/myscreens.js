import React,{Component} from 'react';
import {View} from 'react-native';
import { Class,Exam } from '../components/class/index';


export class ClassSchedule extends Component {
  render(){
    return (

        <Class/>
      )
  }
}

export class ExamSchedule extends Component {
  render(){
    return (
        <Exam/>
      )
  }
}

import Choose from './../components/chooseraction';

export class Chooser extends Component {
  render(){
    return (
        <Choose/>
      )
  }
}
