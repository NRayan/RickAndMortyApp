import React from 'react'
import { View, Text } from 'react-native'
import { locationProps } from '../../services/locationService'
import { ss } from './styles'
import PlanetIcon from '../../assets/planet.svg'
import { theme } from '../../global/theme'
import { LinearGradient } from 'expo-linear-gradient'
import { Color } from 'react-native-svg'

type props = {
    data: locationProps;
}

export function LocationCardSimple({ data }: props) {

    const { name, type, dimension } = data

    return (
        <LinearGradient colors={[theme.colors.background2, theme.colors.secondary]} style={ss.container}>
            <Text style={ss.title}>{name}</Text>

            <View>

                <Text style={{ textAlign: 'center' }}>
                    <Text style={ss.description}>type: </Text>
                    <Text style={ss.value}>{type}</Text>
                </Text>

                <Text style={{ textAlign: 'center', marginTop: 3 }}>
                    <Text style={ss.description}>dimension: </Text>
                    <Text style={ss.value}>{dimension}</Text>
                </Text>
            </View>
        </LinearGradient>
    )
}