import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import avatar from "../../assets/avatar.jpg"
import { colors } from '../constants/colors'
import Button from './Button'
import { useNavigation } from '@react-navigation/native'
import { userPath } from '../constants/Path'

export default function UserInfo({ customStyle, userData }) {
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: colors.white, flex: 0, ...customStyle, paddingBottom: 20 }}>
            <View style={{ flex: 0, flexDirection: "row", alignItems: "center", paddingHorizontal: 10 }}>
                <View style={{ flex: 0, width: "30%" }}>
                    <Image source={userData?.profile_pic_url ? { uri: userData.profile_pic_url } : avatar} style={{ height: 110, width: 110, borderRadius: 50 }} />
                </View>
                <View style={{ flex: 0, width: "70%", paddingHorizontal: "5%" }}>
                    <View style={{ flex: 0, flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ fontWeight: "500" }}>{userData?.edge_owner_to_timeline_media?.count ? userData?.edge_owner_to_timeline_media?.count : 0}</Text>
                            <Text style={{ fontWeight: "500" }}>Posts</Text>
                        </View>
                        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate(userPath.followersScreen)}>
                            <View style={{ alignItems: "center" }}>
                                <Text style={{ fontWeight: "500" }}>{userData?.edge_followed_by?.count ? userData?.edge_followed_by?.count : 0}</Text>
                                <Text style={{ fontWeight: "500" }}>Followers</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate(userPath.followingScreen)}>
                            <View style={{ alignItems: "center" }}>
                                <Text style={{ fontWeight: "500" }}>{userData?.edge_follow?.count ? userData?.edge_follow?.count : 0}</Text>
                                <Text style={{ fontWeight: "500" }}>Following</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0, marginTop: "5%" }}>
                        <Button btnLabel="Edit Profile" btnStyle={{ width: "100%", alignItems: "center", paddingVertical: 5, backgroundColor: colors.activeMenu, borderRadius: 5 }} btnLabelStyle={{ color: colors.white, fontWeight: "600" }} onPress={() => navigation.navigate(userPath.editProfile)} />
                    </View>
                </View>
            </View>
            <View style={{ paddingHorizontal: 20, flex: 0, width: "50%" }}>
                <View style={{ flex: 0 }}>
                    <Text style={{ fontWeight: "600" }}>{userData?.username ? userData?.username : ""}</Text>
                </View>
                <View style={{ flex: 0, marginTop: "2%", overflow: 'scroll' }}>
                    <ScrollView scrollToOverflowEnabled showsVerticalScrollIndicator={false} style={{ maxHeight: 34 }}>
                        <Text>{userData?.biography ? userData?.biography : ""}</Text>
                    </ScrollView>
                </View>
            </View>
        </View >
    )
}
