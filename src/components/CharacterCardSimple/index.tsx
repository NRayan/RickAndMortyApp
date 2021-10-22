import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { characterProps } from '../../services/caracterService'
import { ss } from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { theme } from '../../global/theme'
type props = {
    item: characterProps
}
export function CharacterCardSimple({ item }: props) {

    const { image, name, status } = item
    const [gradientHeight, setGradientHeight] = useState(50);

    function onTextLayout(e: any) {
        if (e.nativeEvent.lines.length > 2) setGradientHeight(70)
    }

    return (
        <View style={ss.container}>
            <View style={ss.content}>
                <Image source={{ uri: image }} style={ss.image} resizeMode='cover' />
                <LinearGradient colors={['transparent', 'rgba(0,0,0,1)']} style={{ width: '100%', height: gradientHeight, position: 'absolute', bottom: -1 }} />
                <Text onTextLayout={onTextLayout} style={ss.title}>{name}</Text>

            </View>
            {
                status === 'Dead' &&
                <View style={ss.statusIcon}>
                    <FontAwesome5 name="skull-crossbones" color="red" size={16} />
                </View>
            }
        </View>
    )
}