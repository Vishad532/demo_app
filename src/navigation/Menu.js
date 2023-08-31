import React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/home/Home';
import { MaterialCommunityIcons, Octicons, Fontisto, FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Notification from '../Screens/notification/Alerts';
import Search from '../Screens/search/Search.js';
import ProfileStackNavigation from './ProfileStackNavigation';

export default function Menu() {
  const Tab = createBottomTabNavigator();
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={{
        showLabel: false,
        keyboardHidesTabBar: true,

        style: {
          height: 50 + insets.bottom,
          borderWidth: 0,
          elevation: 0,
        },
        tabBarActiveTintColor: colors.activeMenu,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={focused ? { flex: 1, alignItems: 'center', justifyContent: "center" } : { flex: 1, alignItems: 'center', justifyContent: "center" }}>
              <Octicons name="home" size={20} color={color} />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Search}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={focused ? { flex: 1, alignItems: 'center', justifyContent: "center" } : { flex: 1, alignItems: 'center', justifyContent: "center" }}>
              <Octicons name="search" size={20} color={color} />
            </View>
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notification}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={focused ? { flex: 1, alignItems: 'center', justifyContent: "center" } : { flex: 1, alignItems: 'center', justifyContent: "center" }}>
              <Fontisto name="bell" size={20} color={color} />
            </View>
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigation}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={focused ? { flex: 1, alignItems: 'center', justifyContent: "center" } : { flex: 1, alignItems: 'center', justifyContent: "center" }}>
              <FontAwesome5 name="user" size={20} color={color} />
            </View>
          ),
          headerShown: false
        }}
      />
    </Tab.Navigator>
  )
}
