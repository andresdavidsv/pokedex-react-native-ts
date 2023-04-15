import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SearchScreen} from '../screens/SearchScreen';
import {Navigator} from './Navigation';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5856D5',
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.82)',
          marginBottom: Platform.OS === 'ios' ? 0 : 10,
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 70 : 80,
        },
      }}>
      <Tab.Screen
        name="Navigator"
        component={Navigator}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={25} name="list-outline" />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={25} name="search-outline" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
