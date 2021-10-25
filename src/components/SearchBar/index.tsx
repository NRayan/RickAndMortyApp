import React, { useEffect, useState } from 'react'
import { View, Text, StyleProp, ViewStyle, TouchableOpacity } from 'react-native'
import { ss } from './styles'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { theme } from '../../global/theme';
import { TextInput } from 'react-native-gesture-handler';

type Props = {
    style?: StyleProp<ViewStyle>
    onChangeText: (text: string) => void
}

export function SearchBar({ style, onChangeText }: Props) {

    const [value, setValue] = useState('');

    useEffect(() => { onChangeText(value) }, [value])

    return (
        <View style={[ss.container, style]}>
            <FontAwesome name="search" size={24} color={theme.colors.primary} />
            <TextInput value={value} onChangeText={setValue} style={ss.input} placeholder="search..." placeholderTextColor={theme.colors.text2} maxLength={35} />

            {
                value !== '' &&
                < TouchableOpacity onPress={() => { setValue('') }}>
                    <AntDesign name="close" size={24} color={theme.colors.primary} />
                </TouchableOpacity>
            }


        </View >
    )
}