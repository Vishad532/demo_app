import React, { useEffect, useState } from 'react'
import { Alert, Platform, RefreshControl, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import UserInfo from '../../components/UserInfo'
import { post } from '../../constants/data';
import { screenWidth, windowHeight } from '../../constants/variabls';
import { FlatGrid } from 'react-native-super-grid';
import PostView from '../../components/PostView';
import { colors } from '../../constants/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getUserInfo } from '../../../Services/userService';
import Loader from '../../components/Loader';


export default function Profile() {
    const insets = useSafeAreaInsets();
    const [loading, setLoading] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState({});
    const getUserData = async () => {
        setIsLoading(true);
        try {
            const { data } = await getUserInfo({ user_name: 'instagram' })
            console.log("Data", data)
            setUserData(data.data.user);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            Alert.alert("Error", error.toString().includes("429") ? "Api limit exceeded." : error.toString())
        }
    }
    useEffect(() => {
        getUserData();
    }, [])
    const renderPost = ({ item }) => {
        console.log(item)
        return (
            <PostView
                url={item?.node?.display_url}
                imageContainerStyle={{ width: screenWidth / 3, height: screenWidth / 3, backgroundColor: colors.white }}
            />
        )
    }
    const loadData = () => {
        setLoading(false)
    }
    return (
        <>
            {isLoading && <Loader isLoading={isLoading} />}
            <View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
                <View style={{ flex: 0 }}>
                    <UserInfo userData={userData} customStyle={{ paddingTop: 20 }} />
                </View>
                <View style={{ flex: 1 }}>
                    <FlatGrid
                        showsVerticalScrollIndicator={false}
                        nestedScrollEnabled={true}
                        itemDimension={screenWidth * 0.3}
                        bounces={false}
                        data={userData?.edge_owner_to_timeline_media?.edges || []}
                        spacing={1}
                        renderItem={renderPost}
                        refreshing={false}
                        enableRefresh={false}
                        refreshControl={
                            <RefreshControl
                                enabled={true}
                                tintColor={colors.activeMenu}
                                refreshing={loading}
                                onRefresh={loadData}
                            />
                        }
                    />
                </View>
            </View>
        </>
    )
}
