import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import colors from '../../assets/theme/colors';

export default function Input({onChangeText, icon, iconPosition, style, value, label, error, ...props}) {
  const [focused, setFocused] = useState(false)
  
  const getFlexDirection = () => {
    if(icon && iconPosition) {
      if(iconPosition === 'left') {
        return 'row';
      } else {
        return 'row-reverse'
      }
    }
  }

  const getBorderColor = () => {
    if(focused) {
      return colors.primary;
    }
    if(error) {
      return colors.danger;
    } else {
      return colors.grey;
    }
  }
 
  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[ 
        styles.wrapper,
        {flexDirection: getFlexDirection(), borderColor: getBorderColor()} 
      ]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}

          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 12
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },  
  wrapper: {
    height: 54,
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 5,
    marginTop: 5,
    alignItems: 'center'
  },
  textInput: {
    flex: 1,
    width: '100%',
    fontSize: 16
  },
  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12
  }
});