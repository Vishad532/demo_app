import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { userPath } from '../constants/Path';
import Profile from '../Screens/profile/Profile';
import EditProfile from '../Screens/profile/EditProfile';
import Followers from '../Screens/profile/Followers';
import Following from '../Screens/profile/Following';
import BackBtn from '../components/BackBtn';

const Stack = createStackNavigator();


export default function ProfileStackNavigation() {
    return (
        <Stack.Navigator screenOptions={{
            headerTitle: '',
            // gestureEnabled: true,
            // gestureDirection: 'horizontal',
            headerBackTitle: ' ',
        }}>

            <Stack.Screen
                name={userPath.profileScreen}
                component={Profile}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name={userPath.editProfile}
                component={EditProfile}
                options={{ headerLeft: BackBtn, headerLeftContainerStyle: { paddingLeft: 10 }, headerTitle: "Edit Profile", headerTitleAlign: "center", headerTitleStyle: { fontSize: 17 } }} />

            <Stack.Screen
                name={userPath.followersScreen}
                component={Followers}
                options={{ headerLeft: BackBtn, headerLeftContainerStyle: { paddingLeft: 10 }, headerTitle: "Followers", headerTitleAlign: "center", headerTitleStyle: { fontSize: 17 } }} />

            <Stack.Screen
                name={userPath.followingScreen}
                component={Following}
                options={{ headerLeft: BackBtn, headerLeftContainerStyle: { paddingLeft: 10 }, headerTitle: "Following", headerTitleAlign: "center", headerTitleStyle: { fontSize: 17 } }} />

        </Stack.Navigator>
    )
}
