import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const ss = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: theme.colors.background,
        justifyContent: 'center',
        alignItems: 'center'
    },
    animation: {
        height: 150,
        width: 150
    },
    title: {
        fontSize: 26,
        color: theme.colors.text1,
        fontFamily: theme.fonts.title,
        marginTop: 10
    }
})