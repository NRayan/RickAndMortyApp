import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const ss = StyleSheet.create({
    container: {
        height: 44,
        width: 44,
        borderRadius: 100,
        backgroundColor: theme.colors.secondary,
        justifyContent: 'center',
        alignItems: 'center'
    },
})