import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { EpisodeCard } from '../../components/EpisodeCard'
import { Header } from '../../components/Header'
import { SeasonButton } from '../../components/SeasonButton'
import { StatusBarPadding } from '../../components/StatusBarPadding'
import { theme } from '../../global/theme'
import { episodeProps, getAllEpisodes, seasonProps } from '../../services/episodesService'
import { ss } from './styles'

export function EpisodesListPage() {

    const [seasons, setSeasons] = useState<seasonProps[]>([])
    const [selectedSeason, setSelectedSeason] = useState(0)
    const [episodes, setEpisodes] = useState<episodeProps[]>([])
    const [loading, setLoading] = useState(true);

    async function getEpisodes() {
        const seasons = await getAllEpisodes();
        setSeasons(seasons);
        setSelectedSeason(1)
        setLoading(false);
    }

    async function handleSeasonButtonPress(seasonNumber: number) {
        setSelectedSeason(seasonNumber);
    }

    function displayEpisodes() {
        if (selectedSeason === 0) return;
        const episodes: episodeProps[] = (seasons.filter(s => s.number === selectedSeason))[0].episodes
        setEpisodes(episodes);
    }

    const renderItem = useCallback(({ item }) => {
        return (<EpisodeCard episode={item} />)
    }, [])

    useEffect(() => { getEpisodes() }, []);
    useEffect(() => { displayEpisodes() }, [selectedSeason]);

    return (
        <View style={ss.container}>
            <StatusBarPadding />
            <Header title="Episodes" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 20, marginBottom: 10, paddingBottom: 15 }}>
                {
                    seasons.map((item) => {
                        return (
                            <SeasonButton key={item.number.toString()}
                                seasonNumber={item.number}
                                onPress={() => { handleSeasonButtonPress(item.number) }}
                                selected={selectedSeason === item.number} />
                        )
                    })
                }
            </ScrollView>

            {
                loading ?
                    <ActivityIndicator size="large" color={theme.colors.primary} style={{ flex: 1 }} />
                    :
                    <FlatList
                        contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 20 }}
                        data={episodes}
                        keyExtractor={(episode) => episode.id.toString()}
                        renderItem={renderItem}
                    />
            }

        </View>
    )
}
