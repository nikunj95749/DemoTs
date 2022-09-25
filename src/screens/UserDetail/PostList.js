import React from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION } from '@/constants';
import { typography } from '@/theme';
import { TxtNormal } from '@/components/text/TxtNormal';

const AllUserList = ({ arrTrendingAll = [], style = {} }) => {
  const navigation = useNavigation();

  const userListItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation?.navigate(NAVIGATION.UserDetail, { item });
        }}
        style={styles.container}
      >
        <TxtNormal title={`${item?.name}`} style={typography.mulishSemiBold} />
        <TxtNormal title={`Email Id: ${item?.email}`} style={styles.subTitle} />
        <TxtNormal title={`Gender: ${item?.gender}`} style={styles.subTitle} />
        <TxtNormal title={`Status: ${item?.status}`} style={styles.subTitle} />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList data={arrTrendingAll} renderItem={userListItem} keyExtractor={(item) => item?.id} />
  );
};

export default AllUserList;

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
