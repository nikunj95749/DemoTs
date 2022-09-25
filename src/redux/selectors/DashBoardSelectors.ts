

interface dashBoard {
  dashBoard: userAllList;
}

interface userAllList {
  userAllList: Array<any>;
}

export const getUserList = (state :dashBoard) => {
  return state.dashBoard?.userAllList ?? [];
};

