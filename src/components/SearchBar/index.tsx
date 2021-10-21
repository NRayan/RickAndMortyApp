import React from 'react'
import { View, Text, StyleProp, ViewStyle } from 'react-native'
import { ss } from './styles'
import { FontAwesome } from '@expo/vector-icons';
import { theme } from '../../global/theme';
import { TextInput } from 'react-native-gesture-handler';

type Props = {
    style?: StyleProp<ViewStyle>
}

export function SearchBar({ style }: Props) {
    return (
        <View style={[ss.container, style]}>
            <FontAwesome name="search" size={24} color={theme.colors.primary} />
            <TextInput style={ss.input} placeholder="search..." placeholderTextColor={theme.colors.text2} maxLength={35} />
        </View>
    )
}