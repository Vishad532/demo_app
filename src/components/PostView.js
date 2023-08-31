import React from 'react'
import { Image, View } from "react-native"
import avatar from "../../assets/avatar.jpg"

export default function PostView({ imageContainerStyle, url }) {
    return (
        <View style={{ flex: 0, ...imageContainerStyle }}>
            <Image source={url ? { uri: url } : avatar} style={{ height: "100%", width: "100%" }} />
        </View>
    )
}
