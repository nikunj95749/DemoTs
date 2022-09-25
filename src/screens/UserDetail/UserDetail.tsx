import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import PostList from '../../components/PostList';
import { styles } from './UserDetail.styles';
import { TxtNormal } from '../../components/text/TxtNormal';
import { getUserPostListData } from '../../resources/baseServices/users';
import TopBar from '../../components/TopBar';
import ListHeader from '../../components/ListHeader';

interface UserDetailProps {
  route: any;
}

export function UserDetail({ route }: UserDetailProps) {
  const navigation = useNavigation();

  const [postList, setPostList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const item = route?.params?.item;

  const setUserPostListData = async () => {
    try {
      setIsLoading(true);
      const res = await getUserPostListData(item?.id);
      setPostList(res?.data?.data);
    } catch (error) {
      console.log('[UserDetail] setUserPostListData error: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setUserPostListData();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TopBar
          onBack={() => {
            navigation.goBack();
          }}
          headingText={'User Details'}
          onMoreShow={() => {}}
        />
        <View style={styles.subContainer}>
          <TxtNormal title={`Email Id: ${item?.email}`} style={styles.subTitle} />
          <TxtNormal title={`Gender: ${item?.gender}`} style={styles.subTitle} />
          <TxtNormal title={`Status: ${item?.status}`} style={styles.subTitle} />

          <ListHeader title={`${item?.name}'s Post List`} style={styles.headerStyle} />

          {isLoading ? (
            <ListHeader title={'Loading...'} style={styles.headerStyle} />
          ) : (
            <ListHeader title={'No post available!'} style={styles.headerStyle} />
          )}

          <PostList arrPostList={postList} />
        </View>
      </SafeAreaView>
    </View>
  );
}
