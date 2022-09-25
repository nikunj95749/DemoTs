import { callApiGet } from './baseApi';
import API, { BASE_URL } from '../../constants/baseApi';


export const getUserAllListData = (page = 1) => callApiGet({ url: API.USER_ALL_LIST });

