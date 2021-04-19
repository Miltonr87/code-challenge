import {combineReducers} from "redux";
import ViewListReducer from './ViewListReducer';

const RootReducer = combineReducers({
    ViewList: ViewListReducer
})

export default RootReducer;