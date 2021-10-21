import React from 'react'
import { View, Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'
import { ss } from './styles'
import DiceIcon from '../../assets/dice.svg'
import { theme } from '../../global/theme'

type props = {
    style?: StyleProp<ViewStyle>
    onPress: () => void
}
export function DiceButton({ style, onPress }: props) {
    return (
        <TouchableOpacity style={[ss.container, style]} onPress={onPress}>
            <DiceIcon width={28} height={28} fill={theme.colors.primary} />
        </TouchableOpacity>
    )
}