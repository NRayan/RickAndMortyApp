import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { characterProps } from '../../services/caracterService'
import { ss } from './styles'
import { LinearGradient } from 'expo-linear-gradient'

type props = {
    item: characterProps
}
export function CharacterCardSimple({ item }: props) {

    const [gradientHeight, setGradientHeight] = useState(50);

    function onTextLayout(e: any) {
        if (e.nativeEvent.lines.length > 2) setGradientHeight(70)
    }

    return (
        <View style={ss.container}>
            <Image source={{ uri: item.image }} style={ss.image} resizeMode='cover' />
            <LinearGradient colors={['transparent', 'rgba(0,0,0,1)']} style={{ width: '100%', height: gradientHeight, position: 'absolute', bottom: -1 }} />
            <Text onTextLayout={onTextLayout} style={ss.title}>{item.name}</Text>
        </View>
    )
}