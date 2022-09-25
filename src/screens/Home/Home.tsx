import React, { useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ListHeader from '../../components/ListHeader';

import AllUserList from './AllUserList';
import { styles } from './Home.styles';
import TopBar from '../../components/TopBar';
import { getUserList } from '../../redux/selectors/DashBoardSelectors';
import { UserListAllSuccess } from '../../redux/actions/DashBoardActions';
import { getUserAllListData } from '../../resources/baseServices/users';

export function Home() {
  const dispatch = useDispatch();

  const arrUserList = useSelector(getUserList);

  const setUserAllListData = async () => {
    try {
      const res = await getUserAllListData();
      dispatch(UserListAllSuccess(res?.data?.data));
    } catch (error) {
      console.log('[Home] setUserAllListData error: ', error);
    }
  };

  useEffect(() => {
    setUserAllListData();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <TopBar onMenuPress={() => {}} onBellShow={() => {}} />
        <View style={styles.subContainer}>
          <ListHeader title="All Users" style={styles.popularHeader} />

          <AllUserList arrUserList={arrUserList} />
        </View>
      </SafeAreaView>
    </View>
  );
}
