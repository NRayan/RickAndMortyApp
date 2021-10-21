import React from 'react'
import { View, Text } from 'react-native'
import { locationProps } from '../../services/locationService'
import { ss } from './styles'
import PlanetIcon from '../../assets/planet.svg'
import { theme } from '../../global/theme'
import { LinearGradient } from 'expo-linear-gradient'

type props = {
    data: locationProps;
}

export function LocationCardSimple({ data }: props) {
    return (
        <LinearGradient colors={[theme.colors.background2, theme.colors.secondary]} style={ss.container}>
            <Text style={ss.title}>{data.name}</Text>

            <View>

                <Text style={{ textAlign: 'center' }}>
                    <Text style={ss.description}>type: </Text>
                    <Text style={ss.value}>{data.type}</Text>
                </Text>

                <Text style={{ textAlign: 'center', marginTop: 3 }}>
                    <Text style={ss.description}>dimension: </Text>
                    <Text style={ss.value}>{data.dimension}</Text>
                </Text>
            </View>

            <PlanetIcon fill={theme.colors.primary} height={23} width={23} style={ss.planetIcon} />
        </LinearGradient>
    )
}