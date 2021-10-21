import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import { StatusBarPadding } from '../../components/StatusBarPadding'
import { ss } from './styles'
import LogoImg from '../../assets/logo.png'
import PickeImg from '../../assets/pickerick.png'
import { characterProps, getSome } from '../../services/caractersService'
import { CharacterCardSimple } from '../../components/CharacterCardSimple'
import { theme } from '../../global/theme'
import { DiceButton } from '../../components/DiceButton'

export function MainPage() {

    const [characters, setCharacters] = useState<characterProps[]>([]);
    const [loading, setLoading] = useState(true)

    async function getCharacters() {
        if (!loading) setLoading(true);
        const Chars = await getSome();
        setCharacters(Chars);
    }
    useEffect(() => { getCharacters() }, []);

    useEffect(() => { if (loading) setLoading(false) }, [characters])

    return (
        <View style={ss.container}>
            <StatusBarPadding />
            <Image source={LogoImg} height={200} width={200} style={{ marginLeft: 20, marginTop: 40, height: 80, width: 220 }} resizeMode='contain' />
            <Image source={PickeImg} height={200} width={200} style={{ position: 'absolute', top: -70, right: 0, height: 250, width: 250 }} resizeMode='contain' />

            <View style={ss.charactersView}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
                    <Text style={ss.title}>Characters</Text>
                    <DiceButton onPress={getCharacters} />
                </View>

                {
                    loading ?
                        <ActivityIndicator size="large" color={theme.colors.primary} style={{ height: 120 }} />
                        :
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={ss.chacartersScrollContainer}>
                            {
                                characters.map(item => { return (<CharacterCardSimple key={item.id} item={item} />) })
                            }
                        </ScrollView>
                }

                <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
                    <Text style={ss.seeAll}>See all {'>'}</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}