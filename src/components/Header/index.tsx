import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ss } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons'
import { theme } from '../../global/theme'
import { useNavigation } from '@react-navigation/core'

type props = {
    title: string;
}
export function Header({ title }: props) {

    const navigation = useNavigation();

    function handleBackButtonPress() {
        navigation.goBack();
    }

    return (
        <View style={ss.container}>
            <TouchableOpacity onPress={handleBackButtonPress} style={{ position: 'absolute', left: 20 }}>
                <Ionicons name='chevron-back' size={40} color={theme.colors.text1} />
            </TouchableOpacity>
            <Text style={ss.title}>{title}</Text>
        </View>
    )
}