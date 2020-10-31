import React from 'react';
import { createBottomTabNavigator,  } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CreateAccountName from '../pages/CreateAccountName';
import CreateAccountLogin from '../pages/CreateAccountLogin';

const { Navigator, Screen } = createBottomTabNavigator();

function CreateAccountTabs() {
  return (
    <Navigator

      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: '#F0F0F7',
          borderTopWidth: 0,
          position: 'absolute',
          top: 24,
          marginHorizontal: 56,
          alignItems: 'flex-end',
          justifyContent: 'center',
        },
        tabStyle: {
          flex: 0,
          width: 8
        },
        iconStyle: {          
        },
        showLabel: false,
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d',
        keyboardHidesTabBar: false
      }}
    >
      <Screen
        name="CreateAccountName"
        component={CreateAccountName}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name="ios-radio-button-on" size={4} color={focused ? '#8257e5' : color}/>
            );
          }
        }}
      />
      <Screen
        name="CreateAccountLogin"
        component={CreateAccountLogin}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name="ios-radio-button-on" size={4} color={focused ? '#8257e5' : color}/>
            );
          }
        }}
      />
    </Navigator>
  );
}

export default CreateAccountTabs;