import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native';

import Container from './common/Container';
import Input from './common/Input';
import CustomButton from './common/CustomButton';
import colors from '../assets/theme/colors';
import { LOGIN } from '../constants/routeNames';

export default function RegisterComponent({
  onSubmit,
  onChange,
  form={form},
  errors={errors}
}) {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Image width={70} height={70} source={require('../assets/images/contact-logo.png')} style={styles.logo} />
      <View style={styles.form}>
        <Text style={styles.title}>Welcome to CBContacts</Text>
        <Text style={styles.subTitle}>Create a free account</Text>

        <Input 
          label="Username"
          placeholder="Enter Username"
          onChangeText={(value) => {
            onChange({name: 'username', value})
          }}
          error={errors.username}
        />
        <Input 
          label="First Name"
          placeholder="Enter First Name"
          onChangeText={(value) => {
            onChange({name: 'firstname', value})
          }}
          error={errors.firstname}
        />
        <Input 
          label="Last Name"
          placeholder="Enter Last Name"
          onChangeText={(value) => {
            onChange({name: 'lastname', value})
          }}
          error={errors.lastname}
        />
        <Input 
          label="Email"
          placeholder="Enter Email"
          onChangeText={(value) => {
            onChange({name: 'email', value})
          }}
          error={errors.email}
        />
        <Input 
          label="Password"
          placeholder="Enter Password"
          secureTextEntry
          icon={<Text>Hide</Text>}
          iconPosition='right'
          onChangeText={(value) => {
            onChange({name: 'password', value})
          }}
          error={errors.password}
        />
        <CustomButton 
          primary
          title="Submit"
          onPress={onSubmit}
        />
        <View style={styles.createSection}>
          <Text style={styles.infoText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigate(LOGIN)}>
            <Text style={styles.linkBtn}>Login</Text>
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