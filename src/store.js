import { createStore } from 'redux';
import {makeGuessReducer} from './reducers'

export default createStore(makeGuessReducer);