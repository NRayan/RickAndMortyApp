import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, Image } from 'react-native'
import { StatusBarPadding } from '../../components/StatusBarPadding'
import { ss } from './styles'
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../global/theme';
import { useNavigation } from '@react-navigation/core';
import { SearchBar } from '../../components/SearchBar';
import { characterProps, getPage } from '../../services/caracterService';
import { FlatList } from 'react-native-gesture-handler';
import { CharacterCard } from '../../components/CharacterCard';
import PoppyIcon from '../../assets/poopybutthole.png'

type getParams = {
    page: number,
    nameFilter: string,
}

export function CharactersList() {

    const navigation = useNavigation();

    const [characters, setCharacters] = useState<characterProps[]>([])
    const [endReached, setEndReached] = useState(false)
    const [loading, setLoading] = useState(true);
    const [getParams, setGetParams] = useState<getParams>({ nameFilter: '', page: 1 })

    async function getChars() {

        const chars = await getPage(getParams.page, getParams.nameFilter)

        if (chars.length > 0) {
            if (getParams.page > 1) {
                setCharacters([...characters, ...chars]);
                if (chars.length < 20) {
                    setEndReached(true);
                }
            }
            else
                setCharacters([...chars]);
        } else {
            setEndReached(true)
        }

        setLoading(false);
    }

    function handleOnEndReached() {
        if (loading || endReached) return
        setGetParams({ page: getParams.page + 1, nameFilter: getParams.nameFilter })
    }

    function handleBackButtonPress() {
        navigation.goBack();
    }

    function handleOnChangeText(text: string) {
        setLoading(true);
        setGetParams({ page: 1, nameFilter: text })
    }

    const renderItem = useCallback(({ item }) => {
        return (<CharacterCard data={item} />)
    }, []);

    function renderFooter() {
        if (endReached)
            return (null)
        else
            return (<ActivityIndicator color={theme.colors.primary} size="large" style={{ marginVertical: 20 }} />)
    };

    useEffect(() => {
        setEndReached(false);
        getChars()
    }, [getParams])

    return (
        <View style={ss.container}>

            <Image source={PoppyIcon} style={ss.image} />

            <StatusBarPadding />

            <View style={ss.header}>
                <TouchableOpacity onPress={handleBackButtonPress} style={{ position: 'absolute', left: 20 }}>
                    <Ionicons name='chevron-back' size={40} color={theme.colors.text1} />
                </TouchableOpacity>
                <Text style={ss.title}>Characters</Text>
            </View>

            {
                loading ?
                    <ActivityIndicator color={theme.colors.primary} size="large" style={{ flex: 1 }} />
                    :
                    <FlatList
                        data={characters}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                        onEndReachedThreshold={.1}
                        onEndReached={handleOnEndReached}
                        ListFooterComponent={renderFooter}
                        style={{ marginBottom: 10 }}
                        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20 }}
                    />
            }

            <SearchBar onChangeText={handleOnChangeText} style={{ marginHorizontal: 20 }} />

        </View>
    )
}