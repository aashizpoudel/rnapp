import {connect} from 'react-redux';
import { ChooserUI } from './chooser';
import { setMetaFinal} from '../actions/actions';
const mapStateToProps = (state) => {
    return {
    	meta: state.meta ,
      };
};

const mapDispatchToProps = (dispatch) => {
    return {
            setMeta:(data)=>{dispatch(setMetaFinal(data))},
       // get:(data)=> dataClass(data),
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(ChooserUI);
