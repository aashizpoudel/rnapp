import types from './types';
import {fetchSchedules,fetchExamSchedules }from './../libs/offline';
// import  from './../libs/offline';

export function classLoaded(bool) {
    return {
        type: 'loaded.class',
        loaded : bool
    };
}
export function dataClass(obj) {
    return {
        type: 'data.class',
        data : obj
    };
}
export function examLoaded(bool) {
    return {
        type: 'loaded.exam',
        loaded : bool
    };
}
export function dataExam(obj) {
    return {
        type: 'data.exam',
        data : obj
    };
}





export function classFetchData(data) {
  return dispatch => {
        console.log('called!!');
        fetchSchedules(data,(datay)=>
        {
            
                if(datay.type == 'success'){
                    dispatch(dataClass(datay.data));
                    dispatch(classLoaded(true));
                }

        });
        
    };
    
}


export function examFetchData(data) {
  return dispatch => {
        console.log('called!!');
        fetchExamSchedules(data,(datay)=>
        {
            
                if(datay.type == 'success'){
                    dispatch(dataExam(datay.data));
                    dispatch(examLoaded(true));
                }

        });
        
    };
    
}