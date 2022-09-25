import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import PostList from '../../components/PostList';
import { getAllPostListData } from '../../resources/baseServices/users';
import { styles } from './AllPosts.styles';

export function AllPosts() {
  const [postList, setPostList] = useState<Array<any>>([]);

  const setUserPostListData = async () => {
    try {
      const res = await getAllPostListData();
      setPostList(res?.data?.data);
    } catch (error) {
      console.log('[AllPosts] setUserPostListData error: ', error);
    }
  };

  useEffect(() => {
    setUserPostListData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <PostList arrPostList={postList} />
      </View>
    </View>
  );
}
