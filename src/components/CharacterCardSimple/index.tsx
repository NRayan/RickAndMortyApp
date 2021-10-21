import React from 'react'
import { View, Text, Image } from 'react-native'
import { characterProps } from '../../services/caractersService'
import { ss } from './styles'

type props = {
    item: characterProps
}
export function CharacterCardSimple({ item }: props) {
    return (
        <View style={ss.container}>
            <Image source={{ uri: item.image }} style={ss.image} resizeMode='cover' />
            <Text style={ss.title}>{item.name}</Text>
        </View>
    )
}