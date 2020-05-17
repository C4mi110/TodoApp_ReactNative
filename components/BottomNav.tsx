import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../screens/Home";
import Todo from "../screens/Todo";
import About from "../screens/About";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#222',
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Todo"
          component={Todo}
          options={{
            tabBarLabel: 'Todo',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcon name="playlist-check" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcon name="information" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  export default MyTabs