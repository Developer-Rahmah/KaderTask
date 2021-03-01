import applicationReducer from 'MyMoviesApp/services/redux/reducer';

const {createStore} = require('redux');

const store = createStore(applicationReducer);
export default store;
