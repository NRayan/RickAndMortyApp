import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const ss = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingBottom: 20
    },
    image: {
        position: 'absolute',
        right: -50,
        top: 30,
        height: 120,
        width: 120,
        transform: [{ rotate: '320deg' }]
    }
})