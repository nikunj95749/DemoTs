import { TYPES } from '@/redux/actions/DashBoardActions';

const defaultState = {
  trandingMoviesList: [],
  userAllList: [],
};
export const dashBoardReducer = (state = defaultState, { payload, type }) => {
  switch (type) {
    case TYPES.ALL_USER_LIST:
      console.log('payload=====ddd ',payload);
      return { ...state, userAllList: payload };
    default:
      return state;
  }
};
