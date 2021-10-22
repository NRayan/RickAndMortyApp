import React from 'react'
import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native'
import { ss } from './styles'

type props =
    {
        style?: StyleProp<ViewStyle>,
        onPress:()=>void
    }

export function SeeEpisodesButton({ style,onPress }: props) {
    return (
        <TouchableOpacity style={[ss.container, style]} onPress={onPress}>
            <Text style={ss.title}>See episodes {'>'} </Text>
        </TouchableOpacity>
    )
}