import {combineReducers} from "redux";
import cellsReducer from'./cellsReducer';

const reducers = combineReducers({
   cells: cellsReducer
});

export default reducers;

export type RootState  = ReturnType<typeof reducers>; // This is just housekeeping, don't be scared of the mumbo jumbo
