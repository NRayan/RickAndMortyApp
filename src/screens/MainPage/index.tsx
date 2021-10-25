import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import { StatusBarPadding } from '../../components/StatusBarPadding'
import { ss } from './styles'
import LogoImg from '../../assets/logo.png'
import PickeImg from '../../assets/pickerick.png'
import { characterProps, getSomeCharacters } from '../../services/caracterService'
import { locationProps, getSomeLocations } from '../../services/locationService'
import { CharacterCardSimple } from '../../components/CharacterCardSimple'
import { theme } from '../../global/theme'
import { DiceButton } from '../../components/DiceButton'
import { LocationCardSimple } from '../../components/LocationCardSimple'
import { SeeEpisodesButton } from '../../components/SeeEpisodesButton'
import { InfoButton } from '../../components/InfoButton'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/core'
import { PageNames } from '../../routes/pageNames'
import { ModalView } from '../../components/ModalView'
import { InfoPage } from '../InfoPage'

export function MainPage() {

    const navigation = useNavigation();

    const [characters, setCharacters] = useState<characterProps[]>([]);
    const [charactersLoading, setCharactersLoading] = useState(true)

    const [locations, setLocations] = useState<locationProps[]>([]);
    const [locationsLoading, setLocationsLoading] = useState(true)

    const [showModal, setShowModal] = useState(false)

    async function getCharacters() {
        if (!charactersLoading) setCharactersLoading(true);
        const Chars = await getSomeCharacters();
        setCharacters(Chars);
    }

    async function getLocations() {

        if (!locationsLoading) setLocationsLoading(true);
        const Chars = await getSomeLocations();
        setLocations(Chars);
    }

    function handleSeeAllCharactersPress() {
        navigation.navigate(PageNames.CharList)
    }

    function handleSeeEpisodesPress() {
        navigation.navigate(PageNames.EpisodesList)
    }

    useEffect(() => { getCharacters(); getLocations() }, []);

    useEffect(() => { if (charactersLoading && characters.length > 0) setCharactersLoading(false); }, [characters]);
    useEffect(() => { if (locationsLoading && locations.length > 0) setLocationsLoading(false) }, [locations])

    return (
        <ScrollView style={ss.container} contentContainerStyle={{ flexGrow: 1 }}>

            <StatusBarPadding />

            <Image source={LogoImg} height={200} width={200} style={{ marginLeft: 20, marginTop: 40, height: 80, width: 220 }} resizeMode='contain' />
            <Image source={PickeImg} height={200} width={200} style={{ position: 'absolute', top: -70, right: 0, height: 250, width: 250 }} resizeMode='contain' />
            <LinearGradient colors={['rgba(0,0,0,.8)', 'transparent']} style={{ width: '100%', height: 100, position: 'absolute' }} />

            <View style={ss.charactersView}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
                    <Text style={ss.title}>Characters</Text>
                    <DiceButton onPress={getCharacters} />
                </View>

                {
                    charactersLoading ?
                        <ActivityIndicator size="large" color={theme.colors.primary} style={{ height: 152 }} />
                        :
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={ss.chacartersScrollContainer}>
                            {
                                characters.map(item => { return (<CharacterCardSimple key={item.id} item={item} />) })
                            }
                        </ScrollView>
                }

                <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={handleSeeAllCharactersPress}>
                    <Text style={ss.seeAll}>See all {'>'}</Text>
                </TouchableOpacity>

            </View>

            <View style={ss.locationsView}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
                    <Text style={ss.title}>Locations</Text>
                    <DiceButton onPress={getLocations} />
                </View>

                {
                    locationsLoading ?
                        <ActivityIndicator size="large" color={theme.colors.primary} style={{ height: 140 }} />
                        :
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={ss.locationsScrollContainer}>
                            {
                                locations.map(item => { return (<LocationCardSimple key={item.id} data={item} />) })
                            }
                        </ScrollView>
                }

            </View>

            <View style={ss.footer} >
                <View style={ss.footerLine}>
                    <InfoButton onPress={() => { setShowModal(true) }} />
                    <SeeEpisodesButton onPress={handleSeeEpisodesPress} />
                </View>
            </View>

            <ModalView visible={showModal} outPress={() => { setShowModal(false) }}>
                <InfoPage />
            </ModalView>

        </ScrollView>
    )
}