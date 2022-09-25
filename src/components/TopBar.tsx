import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Image,
  Text,
} from 'react-native';
import { BLACK } from '../constants/colors';
import { backIcon, bellIcon, menuIcon,  moreIcon } from '../assets';
import { scaleSize, padding } from '../constants/mixins';

interface TopBarProps {
  onBack?: boolean | any;
  onMenuPress?: any;
  onBellShow?: any;
  headingText?: string;
  onMoreShow?: any;
  containerStyle?: object;
  headerTextStyles?: object;
}

export default function TopBar({
  onBack,
  onMenuPress,
  onBellShow,
  headingText = '',
  onMoreShow,
  containerStyle = {},
  headerTextStyles = {},
}: TopBarProps) {
  return (
    <SafeAreaView>
      <View style={{ ...styles.topBar, ...containerStyle }}>
        <View style={styles.leftOrRightButtonContainer}>
          {onBack && (
            <TouchableOpacity style={styles.back} onPress={onBack}>
              <Image
                resizeMode={'contain'}
                style={[styles.imgButton, { tintColor: BLACK }]}
                source={backIcon}
              />
            </TouchableOpacity>
          )}
          {onMenuPress && (
            <TouchableOpacity style={styles.back} onPress={onMenuPress}>
              <Image resizeMode={'contain'} style={styles.imgButton} source={menuIcon} />
            </TouchableOpacity>
          )}
        </View>
        {headingText !== '' && (
          <Text style={{ ...styles.headerText, ...headerTextStyles }}>{headingText}</Text>
        )}
        <View
          style={[
            !onMoreShow || (onBellShow && styles.emptyView),
            styles.leftOrRightButtonContainer,
          ]}
        >
          {onMoreShow && (
            <TouchableOpacity style={styles.close} onPress={onMoreShow}>
              <Image style={[styles.imgButton, { tintColor: BLACK }]} source={moreIcon} />
            </TouchableOpacity>
          )}
          {onBellShow && (
            <TouchableOpacity style={styles.close} onPress={onBellShow}>
              <Image style={styles.imgButton} source={bellIcon} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topBar: {
    height: 49,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  headerText: {
    position: 'absolute',
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.5,
    textAlign: 'center',
    marginLeft: Dimensions.get('window').width * 0.5 - Dimensions.get('window').width * 0.25,
    bottom: 14,
  },
  back: {
    ...padding(12, 16, 12, scaleSize(4)),
  },
  close: {
    ...padding(8, 4, 8, 7),
  },
  search: {
    ...padding(12, 16, 12, scaleSize(4)),
  },
  menu: {
    ...padding(8, 0, 8, scaleSize(4)),
  },
  leftHeaderItemView: {
    flexDirection: 'row',
  },
  emptyView: {
    padding: 10,
  },
  saveAndUpdateButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  leftOrRightButtonContainer: { flexDirection: 'row' },
  imgButton: { height: 25, width: 30, resizeMode: 'contain' },
});
