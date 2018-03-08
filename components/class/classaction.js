import { connect } from 'react-redux';
import { classFetchData} from '../../actions/actions';

import {HomeUi} from './classui';
const mapStateToProps = (state) => {
	console.log('start');
	console.log(state  );
	console.log('end');
    return {
    	meta: state.meta ,
        data: state.classIsData,
        loading: state.classIsLoading,
        loaded : state.classIsLoaded,
        error: state.classIsError,
        };
};
const mapDispatchToProps = (dispatch) => {
    return {
       fetch:(data)=>{dispatch(classFetchData(data))},
       // get:(data)=> dataClass(data),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeUi);