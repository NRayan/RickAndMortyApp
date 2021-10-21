import React from 'react'
import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native'
import { ss } from './styles'

type props =
    {
        style?: StyleProp<ViewStyle>
    }

export function SeeEpisodesButton({ style }: props) {
    return (
        <TouchableOpacity style={[ss.container, style]}>
            <Text style={ss.title}>See episodes {'>'} </Text>
        </TouchableOpacity>
    )
}