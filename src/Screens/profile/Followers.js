import React, { useEffect, useState } from 'react'
import { Alert, FlatList, Image, Text, View } from 'react-native'
import { getFollowers } from '../../../Services/userService'
import avatar from "../../../assets/avatar.jpg"
import { colors } from '../../constants/colors'
import Loader from '../../components/Loader'

export default function Followers() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const getAllFollowers = async () => {
        setIsLoading(true)
        try {
            const { data } = await getFollowers({ user_id: '25025320', batch_size: '20' });
            console.log("Followers", data?.data?.user?.edge_followed_by?.edges)
            setUsers(data?.data?.user?.edge_followed_by?.edges ? data?.data?.user?.edge_followed_by?.edges : [])
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            Alert.alert("Error", error.toString().includes("429") ? "Api limit exceeded" : error.toString())
        }
    }
    useEffect(() => {
        getAllFollowers()
    }, [])
    const renderItem = ({ item }) => {
        console.log("profile Data", item)
        return (
            <View style={{ flex: 0, display: "flex", flexDirection: "row", paddingVertical: 10, alignItems: "center", backgroundColor: colors.white, paddingHorizontal: 10 }}>
                <View style={{ flex: 0 }}>
                    <Image source={item?.node?.profile_pic_url ? { uri: item?.node?.profile_pic_url } : avatar} style={{ height: 60, width: 60, borderRadius: 50 }} />
                </View>
                <View style={{ flex: 0, marginLeft: 10 }}>
                    <Text style={{ fontSize: 15 }}>{item?.node?.username ? item?.node?.username : ""}</Text>
                </View>
            </View>
        )
    }
    const emptyComponent = () => {
        return (
            <View style={{ flex: 0, alignItems: 'center', justifyContent: "center" }}>
                <Text style={{ fontSize: 15 }}>No results.</Text>
            </View>
        )
    }
    return (
        <>
            {isLoading && <Loader isLoading={isLoading} />}
            <View style={{ flex: 1 }}>
                <FlatList
                    data={users}
                    renderItem={renderItem}
                    initialNumToRender={10}
                    ListEmptyComponent={emptyComponent}
                />
            </View>
        </>
    )
}
