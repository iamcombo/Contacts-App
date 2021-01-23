import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CONTACT_DETAIL, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from '../constants/routeNames';

import Contact from '../screens/Contacts';
import ContactDetail from '../screens/ContactDetail';
import CreateContact from '../screens/CreateContact';
import Setting from '../screens/Settings';

export default function HomeNavigator() {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen 
        name={CONTACT_LIST}
        component={Contact}
      ></HomeStack.Screen>
      <HomeStack.Screen 
        name={CONTACT_DETAIL}
        component={ContactDetail}
      ></HomeStack.Screen>
      <HomeStack.Screen 
        name={CREATE_CONTACT}
        component={CreateContact}
      ></HomeStack.Screen>
      <HomeStack.Screen 
        name={SETTINGS}
        component={Setting}
      ></HomeStack.Screen>
    </HomeStack.Navigator>
  )
}