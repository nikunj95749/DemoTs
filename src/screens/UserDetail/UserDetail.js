import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { styles } from '@/screens/UserDetail/UserDetail.styles';
import { TxtNormal } from '@/components/text/TxtNormal';
import { WHITE } from '@/constants/colors';
import ListHeader from '@/components/ListHeader';
import TopBar from '@/components/TopBar';
import { getUserPostListData } from '@/resources/baseServices/users';
import PostList from '../../components/PostList';

export function UserDetail({ route }) {
  const navigation = useNavigation();

  const [postList, setPostList] = useState([]);
  const item = route?.params?.item;

  const setUserPostListData = async () => {
    try {
      const res = await getUserPostListData(item?.id);
      setPostList(res?.data?.data)
    } catch (error) {
      console.log('[UserDetail] setUserPostListData error: ', error);
    }
  };

  useEffect(() => {
    setUserPostListData();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <TopBar
            onBack={() => {
              navigation.goBack();
            }}
            headingText={'User Details'}
            onMoreShow={() => {}}
          />
          <View
            style={{
              width: '100%',
              paddingBottom: 20,
              paddingLeft: 20,
              backgroundColor: WHITE,
            }}
          >
            <TxtNormal title={`Email Id: ${item?.email}`} style={styles.subTitle} />
            <TxtNormal title={`Gender: ${item?.gender}`} style={styles.subTitle} />
            <TxtNormal title={`Status: ${item?.status}`} style={styles.subTitle} />

            <ListHeader
              title={`${item?.name}'s Post List`}
              style={{ marginTop: 25, marginBottom: 10 }}
            />

            <PostList arrPostList={postList}/>

          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
