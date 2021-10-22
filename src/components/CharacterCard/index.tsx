import React from 'react'
import { View, Text, Image } from 'react-native'
import { characterProps } from '../../services/caracterService'
import { ss } from './styles'
import { theme } from '../../global/theme'

import DeadFaceIcon from '../../assets/deadFace.svg'
import AlienIcon from '../../assets/alien.svg'
import GenderIcon from '../../assets/gender.svg'
import LocationIcon from '../../assets/location.svg'

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

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <DeadFaceIcon fill={theme.colors.primary} height={iconSize} width={iconSize} />
                            <Text style={ss.value}>{status}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 8 }}>
                            <AlienIcon fill={theme.colors.primary} height={iconSize} width={iconSize} />
                            <Text style={ss.value}>{species}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <GenderIcon fill={theme.colors.primary} height={iconSize} width={iconSize} />
                            <Text style={ss.value}>{gender}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                        <LocationIcon fill={theme.colors.primary} height={iconSize} width={iconSize} />
                        <Text style={ss.value}>{origin}</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}