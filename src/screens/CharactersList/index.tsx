import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { StatusBarPadding } from '../../components/StatusBarPadding'
import { ss } from './styles'
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../global/theme';
import { useNavigation } from '@react-navigation/core';
import { SearchBar } from '../../components/SearchBar';
import { characterProps } from '../../services/caracterService';

export function CharactersList() {
    const navigation = useNavigation();

    const [allCharacters, setAllCharacters] = useState<characterProps[]>([])
    const [characters, setCharacters] = useState<characterProps[]>([])

    function handleBackButtonPress() {
        navigation.goBack();
    }

    return (
        <View style={ss.container}>

            <StatusBarPadding />
            <View style={ss.header}>
                <TouchableOpacity onPress={handleBackButtonPress} style={{ position: 'absolute', left: 0 }}>
                    <Ionicons name='chevron-back' size={40} color={theme.colors.text1} />
                </TouchableOpacity>
                <Text style={ss.title}>Characters</Text>
            </View>



            <SearchBar />
        </View>
    )
}