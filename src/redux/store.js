import { createStore } from 'redux';
import cartReducer from './cartReducer';

// Create Redux store
const store = createStore(cartReducer);

export default store;
