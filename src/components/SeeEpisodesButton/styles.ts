import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const ss = StyleSheet.create({
    container: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
        borderRadius: 10
    },
    title: {
        fontSize: 22,
        color: 'black',
        fontFamily: theme.fonts.title,
        marginBottom: 3
    }
})