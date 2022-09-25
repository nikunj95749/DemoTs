import { callApiGet } from './baseApi';
import API, { BASE_URL } from '../../constants/baseApi';

export const getUserAllListData = (page = 1) => callApiGet({ url: API.USER_ALL_LIST });

export const getUserPostListData = (userId) =>
  callApiGet({ url: API.POST_LIST + '?user_id=' + userId });

  export const getAllPostListData = () =>
  callApiGet({ url: API.POST_LIST });
