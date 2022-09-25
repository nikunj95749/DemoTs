import { combineReducers } from 'redux';
import { dashBoardReducer } from '@/redux/reducers/DashBoardReducer';

export const rootReducer = combineReducers({
  dashBoard: dashBoardReducer,
});
