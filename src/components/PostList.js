import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { typography } from '@/theme';
import { TxtNormal } from '@/components/text/TxtNormal';

const PostList = ({ arrPostList = [], style = {} }) => {

  const userListItem = ({ item, index }) => {
    return (
      <View style={styles.container}>
        <TxtNormal title={`${item?.title}`} style={typography.mulishSemiBold} />
        <TxtNormal title={`${item?.body}`} style={styles.subTitle} />
      </View>
    );
  };

  return (
    <FlatList data={arrPostList} renderItem={userListItem} keyExtractor={(item) => item?.id} />
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
