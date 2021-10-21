import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ss } from './styles'
import InfoIcon from '../../assets/info.svg'
import { theme } from '../../global/theme'
export function InfoButton() {
    return (
        <TouchableOpacity style={ss.container}>
            <InfoIcon height={18} width={18} fill={theme.colors.primary} />
        </TouchableOpacity>
    )
}