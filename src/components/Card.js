import React, { Children } from 'react'
import { View } from 'react-native'
import { colors } from '../constants/colors'

export default function Card(props) {
    const {
        flex,
        color=colors.white,
        radius,
        children,
        padding=10,
        margin,
        marginTop,
        paddingTop,
        marginLeft,
        paddingLeft,
        marginRight,
        paddingRight,
        marginBottom,
        paddingBottom,
        marginVertical,
        paddingVertical,
        marginHorizontal,
        paddingHorizontal,
        style
    }=props
  return (
      <View style={{
        flex:flex,
        borderRadius:radius,
        backgroundColor:color,
        padding:padding,margin:margin,
        marginBottom:marginBottom,
        marginTop:marginTop,
        marginLeft:marginLeft,
        marginRight:marginRight,
        paddingBottom:paddingBottom,
        paddingTop:paddingTop,
        paddingLeft:paddingLeft,
        paddingRight:paddingRight,
        paddingHorizontal:paddingHorizontal,
        paddingVertical:paddingVertical,
        marginHorizontal:marginHorizontal,
        marginVertical:marginVertical,
        ...style
        }}>
        {children}
    </View>
  )
}
