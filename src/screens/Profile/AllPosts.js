import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { styles } from '@/screens/Profile/AllPosts.styles';
import { getAllPostListData } from '@/resources/baseServices/users';
import { WHITE } from '@/constants/colors';
import PostList from '@/components/PostList';

export function AllPosts() {
  const dispatch = useDispatch();

  const [postList, setPostList] = useState([]);

  const setUserPostListData = async () => {
    try {
      const res = await getAllPostListData();
      setPostList(res?.data?.data);
    } catch (error) {
      console.log('[UserDetail] setUserPostListData error: ', error);
    }
  };

  useEffect(() => {
    setUserPostListData();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          paddingBottom: 20,
          paddingLeft: 20,
          backgroundColor: WHITE,
        }}
      >
        <PostList arrPostList={postList} />
      </View>
    </View>
  );
}
