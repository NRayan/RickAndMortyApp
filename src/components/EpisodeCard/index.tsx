import React from 'react'
import { View, Text } from 'react-native'
import { episodeProps } from '../../services/episodesService'
import { ss } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons'
import { theme } from '../../global/theme'

type props = {
    episode: episodeProps;
}

export function EpisodeCard({ episode }: props) {

    const { name, episodeNumber, releaseDate } = episode;

    return (
        <View style={ss.container}>

            <View style={ss.content}>
                <View style={ss.chip}>
                    <Text style={ss.number}>{episodeNumber}</Text>
                </View>
                <Text style={ss.title}>{name}</Text>
            </View>

            <View style={[ss.content, { alignItems: 'center' }]}>
                <Ionicons name="calendar" color={theme.colors.primary} size={22} style={{ marginHorizontal: 3 }} />
                <Text style={ss.date}>{releaseDate}</Text>
            </View>

        </View>
    )
}