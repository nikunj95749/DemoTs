import { TYPES } from '@/redux/actions/DashBoardActions';

interface ActionObject {
  type: string;
  payload?: any;
}

interface defaultStateProps {
  userAllList?: Array<any>;
}

const defaultState: defaultStateProps = {
  userAllList: [],
};
export const dashBoardReducer = (state = defaultState, { payload, type }: ActionObject) => {
  switch (type) {
    case TYPES.ALL_USER_LIST:
      return { ...state, userAllList: payload };
    default:
      return state;
  }
};
