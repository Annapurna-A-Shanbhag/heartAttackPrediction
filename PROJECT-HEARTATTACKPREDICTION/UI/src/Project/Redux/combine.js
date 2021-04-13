import {combineReducers} from 'redux'
import Reducer from './reducer'
import Reducer2 from './reducer2'
let combine=combineReducers({
       Reducer,
       Reducer2
   });
export default combine
