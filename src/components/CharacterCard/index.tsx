import React from 'react'
import { View, Text, Image } from 'react-native'
import { characterProps } from '../../services/caracterService'
import { ss } from './styles'
import { theme } from '../../global/theme'

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

type props = {
    data: characterProps
}
export function CharacterCard({ data }: props) {

    const { image, name, gender, species, status, origin } = data;
    const iconSize = 16

    return (
        <View style={ss.container}>
            <Image source={{ uri: image }} style={ss.image} height={110} width={110} />


            <View style={ss.content}>

                <Text style={ss.name}>{name}</Text>

                <View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={ss.valueView}>
                            <MaterialCommunityIcons name="alien" color={theme.colors.primary} size={iconSize} />
                            <Text style={ss.value}>{species}</Text>
                        </View>

                        <View style={[ss.valueView, { marginLeft: 6 }]}>
                            <MaterialCommunityIcons name="gender-male-female" color={theme.colors.primary} size={iconSize} />
                            <Text style={ss.value}>{gender}</Text>
                        </View>
                    </View>

                    <View style={[ss.valueView, { marginVertical: 3 }]}>

                        <MaterialCommunityIcons name={status === 'Dead' ? "emoticon-dead" : "emoticon-happy"} color={theme.colors.primary} size={iconSize} />
                        <Text style={ss.value}>{status}</Text>
                    </View>

                    <View style={ss.valueView}>
                        <MaterialIcons name="location-pin" color={theme.colors.primary} size={iconSize} />
                        <Text style={ss.value}>{origin}</Text>
                    </View>

                </View>

            </View>
        </View>
    )
}