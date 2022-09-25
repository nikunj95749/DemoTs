import React from 'react';
import { FlatList,  StyleSheet, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION } from '../../constants';
import { TxtNormal } from '../../components/text/TxtNormal';
import { typography } from '../../theme';

interface AllUserListProps {
  arrUserList?: Array<UserDetailsProps>;
  style?: object;
}
interface UserListItemProps {
  item: UserDetailsProps;
  index?: number;
}
interface UserDetailsProps {
  id: number;
  name?: string;
  email?: string;
  gender?: string;
  status?: string;
}

const AllUserList = ({ arrUserList = [], style = {} }: AllUserListProps) => {
  const navigation = useNavigation();

  const onPressUserItem = (item: UserDetailsProps) => {
    navigation?.navigate(NAVIGATION.UserDetail, { item });
  };

  const userListItem = ({ item, index }: UserListItemProps) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onPressUserItem(item);
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
    <FlatList data={arrUserList} renderItem={userListItem} keyExtractor={(item) => item?.id} />
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
