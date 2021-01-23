import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native';

import Container from './common/Container';
import Input from './common/Input';
import CustomButton from './common/CustomButton';
import { REGISTER } from '../constants/routeNames';
import colors from '../assets/theme/colors';

export default function LoginComponent() {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Image width={70} height={70} source={require('../assets/images/contact-logo.png')} style={styles.logo} />
      <View style={styles.form}>
        <Text style={styles.title}>Welcome to CBContacts</Text>
        <Text style={styles.subTitle}>Please Login Here</Text>

        <Input 
          label="Username"
          placeholder="Enter Username"
        />
        <Input 
          label="Password"
          placeholder="Enter Password"
          secureTextEntry
          icon={<Text>Hide</Text>}
          iconPosition='right'
        />
        <CustomButton 
          primary
          title="Submit"
        />
        <View style={styles.createSection}>
          <Text style={styles.infoText}>Need a new account?</Text>
          <TouchableOpacity onPress={() => navigate(REGISTER)}>
            <Text style={styles.linkBtn}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 260,
    height: 260,
    alignSelf: 'center'
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: '500'
  },
  subTitle: {
    fontSize: 17,
    textAlign: 'center',
    paddingVertical: 20,
    fontWeight: '500'
  },
  form: {
    paddingTop: 20
  },
  createSection: {
    flexDirection: 'row',
    paddingTop: 8
  },
  linkBtn: {
    paddingLeft: 16,
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600'
  },
  infoText: {
    fontSize: 17
  }
})