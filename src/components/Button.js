import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

export default function Button({ onPress, btnStyle, btnLabel, btnLabelStyle }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={btnStyle}>
                <Text style={btnLabelStyle}>{btnLabel}</Text>
            </View>
        </TouchableOpacity>
    )
}
