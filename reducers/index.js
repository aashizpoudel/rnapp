import { combineReducers } from 'redux';
import {
	meta,classIsLoading,classIsLoaded,classIsError,classIsData,
	examIsLoading,examIsLoaded,examIsError,examIsData
} from './items';
export default combineReducers({
   meta,classIsLoading,classIsLoaded,classIsError,classIsData,
   examIsLoading,examIsLoaded,examIsError,examIsData
});

