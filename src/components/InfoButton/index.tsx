import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ss } from './styles'
import InfoIcon from '../../assets/info.svg'
import { theme } from '../../global/theme'


type props =
    {
        onPress: () => void
    }

export function InfoButton({ onPress }: props) {
    return (
        <TouchableOpacity style={ss.container} onPress={onPress}>
            <InfoIcon height={18} width={18} fill={theme.colors.primary} />
        </TouchableOpacity>
    )
}