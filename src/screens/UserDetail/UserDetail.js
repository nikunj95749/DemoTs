import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, ImageBackground } from 'react-native';
import { styles } from '@/screens/UserDetail/UserDetail.styles';
import { typography } from '@/theme';
import { TxtNormal } from '@/components/text/TxtNormal';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { WHITE } from '@/constants/colors';
import ListHeader from '@/components/ListHeader';
import TopBar from '@/components/TopBar';

export function UserDetail({ route }) {
  const navigation = useNavigation();

  const [postList, setPostList] = useState([]);
  const item = route?.params?.item;


  const setUserPostListData = async () => {
    try {
      const res = await getUserAllListData();
      dispatch(UserListAllSuccess(res?.data?.data));
    } catch (error) {
      console.log('[Home] setUserPostListData error: ', error);
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

            <ListHeader title={`${item?.name}'s Post List`}style={{ marginTop: 25, marginBottom: 10 }} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
