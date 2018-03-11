// import types from './../actions/types';

const initial = {
    meta : {department:'BME',year:'III'},
    class : {meta: {loading:'true',loaded:'false',error:'false'} ,data: {}},
    exam : {meta:{loading:'true',loaded:'false',error:'false'},data:[] ,
    }
};

export function meta(state=initial.meta,action){
    // console.log(state.meta);
    switch (action.type){
        case 'change.department':
            return Object.assign({},state,{department:action.department});
        case 'change.year':
            return Object.assign({},state,{year:action.year});
        case 'change.meta':
            console.log('hit!!!',action.meta);
            return action.meta;
        default:
            return state ;
    }
    
}

export function classIsLoading(state=true,action){
    switch (action.type ){
        case 'loading.class':
        return action.loading ;
        default:
        return state ;
    }
}
    
export function classIsLoaded(state=false,action){
    switch (action.type ){
        case 'loaded.class':
        return action.loaded ;
        default:
        return state ;
    }
}

export function classIsError(state=false,action){
    switch (action.type ){
        case 'error.class':
        return action.error ;
        default:
        return state ;
    }
}



export function classIsData(state={},action){
    switch (action.type ){
        case 'data.class':
        console.log(action.data);
        return action.data ;
        default:
        return state ;
    }
}

//Exam Reducers
export function examIsLoading(state=true,action){
    switch (action.type ){
        case 'loading.exam':
        return action.loading ;
        default:
        return state ;
    }
}
    
export function examIsLoaded(state=false,action){
    switch (action.type ){
        case 'loaded.exam':
        return action.loaded ;
        default:
        return state ;
    }
}

export function examIsError(state=false,action){
    switch (action.type ){
        case 'error.exam':
        return action.error ;
        default:
        return state ;
    }
}



export function examIsData(state={},action){
    switch (action.type ){
        case 'data.exam':
        console.log(action.data);
        return action.data ;
        default:
        return state ;
    }
}