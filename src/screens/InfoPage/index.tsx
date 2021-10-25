import React from 'react'
import { View, Text } from 'react-native'
import { ss } from './styles'
import { FontAwesome, AntDesign } from '@expo/vector-icons/'
import { theme } from '../../global/theme'

import ReactIcon from '../../assets/react.svg'
import ExpoIcon from '../../assets/expo.svg'
import FigmaIcon from '../../assets/figma.svg'

export function InfoPage() {
    return (
        <View style={ss.container}>
            <Text style={ss.title}>Rick and Morty App</Text>

            <View>
                <Text style={ss.subTitle}>Norton Rayan</Text>
                <View style={ss.inlineContent}>
                    <View style={ss.inlineContent}>
                        <AntDesign name="github" color={theme.colors.primary} size={22} />
                        <Text style={ss.value}>/nrayan</Text>
                    </View>
                    <View style={[ss.inlineContent, { marginLeft: 10 }]}>
                        <AntDesign name="linkedin-square" color={theme.colors.primary} size={22} />
                        <Text style={ss.value}>/nortu</Text>
                    </View>
                </View>
            </View>

            <View style={{ marginVertical: 30 }}>
                <Text style={ss.subTitle}>Provided data by:</Text>
                <View style={ss.inlineContent}>
                    <Text style={[ss.value, { marginLeft: 0 }]}>rickandmortyapi.com</Text>
                </View>
            </View>


            <View>
                <Text style={ss.subTitle}>Made with:</Text>
                <View style={ss.inlineContent}>
                    <View style={ss.inlineContent}>
                        <ReactIcon height={28} width={28} />
                        <Text style={ss.value}>React Native</Text>
                    </View>
                    <View style={[ss.inlineContent, { marginHorizontal: 10 }]}>
                        <ExpoIcon height={28} width={28} />
                        <Text style={ss.value}>Expo</Text>
                    </View>
                    <View style={ss.inlineContent}>
                        <FigmaIcon height={28} width={28} />
                        <Text style={ss.value}>Figma</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}