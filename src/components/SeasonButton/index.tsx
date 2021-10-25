import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { theme } from '../../global/theme'
import { ss } from './styles'

type props =
    {
        seasonNumber: number,
        selected: Boolean,
        onPress: () => void
    }

export function SeasonButton({ seasonNumber, selected, onPress }: props) {
    return (
        <TouchableOpacity onPress={onPress} style={[ss.container, { backgroundColor: selected ? theme.colors.primary : theme.colors.background }]}>
            <Text style={[ss.title, { color: selected ? theme.colors.background : theme.colors.primary }]}>{`Season ${seasonNumber}`}</Text>
        </TouchableOpacity>
    )
}