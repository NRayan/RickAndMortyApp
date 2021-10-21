import React from 'react'
import { View, Text } from 'react-native'
import { ss } from './styles'

import LottieView from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/theme';

export function LoadingPage() {

    return (
        <LinearGradient colors={[theme.colors.background, 'black']} style={ss.container}>
            <LottieView autoPlay={true} style={ss.animation} source={require('../../assets/mortyAnimation.json')} />
            <Text style={ss.title}>loading...</Text>
        </LinearGradient>
    )
}