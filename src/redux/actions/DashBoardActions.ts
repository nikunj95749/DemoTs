interface defaultTypesProps {
  ALL_USER_LIST: string;
}

export const TYPES: defaultTypesProps = {
  ALL_USER_LIST: 'ALL_USER_LIST',
};

export const UserListAllSuccess = (data: Array<any>) => ({
  type: TYPES.ALL_USER_LIST,
  payload: data,
});
