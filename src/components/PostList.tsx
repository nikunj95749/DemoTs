import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { typography } from '../theme';
import { TxtNormal } from './text/TxtNormal';

interface PostListObjProps {
  title: string;
  body: string;
}

interface PostListItemObjProps {
  item: PostListObjProps;
  index: number;
}

interface PostListProps {
  arrPostList: Array<PostListObjProps>;
  style?: object;
}

const PostList = ({ arrPostList = [], style = {} }: PostListProps) => {
  const postListItem = ({ item, index }: PostListItemObjProps) => {
    return (
      <View style={styles.container}>
        <TxtNormal title={`${item?.title}`} style={typography.mulishSemiBold} />
        <TxtNormal title={`${item?.body}`} style={styles.subTitle} />
      </View>
    );
  };

  return (
    <FlatList data={arrPostList} renderItem={postListItem} keyExtractor={(item) => item?.id} />
  );
};

export default PostList;

export const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    marginTop: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  contentMainView: { height: '100%', marginLeft: 10 },
  subTitle: { ...typography.mulishRegular },
});
