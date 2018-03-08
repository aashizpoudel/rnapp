import React from 'react';
import {Root} from './route/routes';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';



const store = configureStore(

	);


export default class App extends React.Component {

 constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  render() {
    return (
     <Provider store={store}>
        <Root />
    </Provider>
      
    );
  }
}

