import React from 'react'
import { View, Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'
import { ss } from './styles'
import DiceIcon from '../../assets/dice.svg'
import { theme } from '../../global/theme'
import { LinearGradient } from 'expo-linear-gradient'

type props = {
    style?: StyleProp<ViewStyle>
    onPress: () => void
}
export function DiceButton({ style, onPress }: props) {
    return (
        <LinearGradient style={[ss.container, style]} colors={[theme.colors.background2, theme.colors.secondary]}>
            <TouchableOpacity onPress={onPress}>
                <DiceIcon width={28} height={28} fill={theme.colors.primary} />
            </TouchableOpacity>
        </LinearGradient>
    )
}