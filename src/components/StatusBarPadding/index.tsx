import React from 'react'
import { View, StatusBar } from 'react-native'

export function StatusBarPadding() {
    return (
        <View style={{ width: '100%', height: StatusBar.currentHeight, backgroundColor: 'transparent' }} />
    )
}