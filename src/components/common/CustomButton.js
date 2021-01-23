import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../assets/theme/colors';

export default function CustomButton({
  title,
  secondary,
  primary,
  danger,
  disable,
  loading,
  onPress,
}) {
  const getBgColor = () => {
    if(primary) {
      return colors.primary;
    }
    if(danger) {
      return colors.danger;
    } 
    if(secondary) {
      return colors.secondary;
    }
    if(disable) {
      return colors.grey
    }
  }
 
  return (
    <TouchableOpacity 
      disabled={disable}
      onPress={onPress}
      style={[
        styles.wrapper, 
        { backgroundColor: getBgColor() }
      ]}
    >
      <View style={styles.loaderSection}>
        { loading && <ActivityIndicator /> }
        { title && (
          <Text 
            style={{
              color:disable ? 'black' : colors.white, 
              paddingLeft:loading ? 5 : 0
            }}
          >
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 44,
    borderRadius: 8,
    paddingHorizontal: 5,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  loaderSection: {
    flexDirection: 'row'
  }
});