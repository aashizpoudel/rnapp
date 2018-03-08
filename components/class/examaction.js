import { connect } from 'react-redux';
import { examFetchData} from '../../actions/actions';

import {HomeUi} from './examui';
const mapStateToProps = (state) => {
	console.log('start');
	console.log(state  );
	console.log('end');
    return {
    	meta: state.meta ,
        data: state.examIsData,
        loading: state.examIsLoading,
        loaded : state.examIsLoaded,
        error: state.examIsError,
        };
};
const mapDispatchToProps = (dispatch) => {
    return {
       fetch:(data)=>{dispatch(examFetchData(data))},
       // get:(data)=> dataClass(data),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeUi);