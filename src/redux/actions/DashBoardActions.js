
export const TYPES = {
  ALL_USER_LIST: 'ALL_USER_LIST',
};


export const UserListAllSuccess = (data) => ({
  type: TYPES.ALL_USER_LIST,
  payload: data,
});

