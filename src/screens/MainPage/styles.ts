import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const ss = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    charactersView: {
        marginTop: 40
    },
    title: {
        fontSize: 28,
        color: theme.colors.text1,
        fontFamily: theme.fonts.title,
        marginBottom: 15
    },
    seeAll: {
        fontSize: 28,
        color: theme.colors.text1,
        fontFamily: theme.fonts.title,
        marginRight: 20,
        marginTop: 10,
    },
    chacartersScrollContainer: {
        height: 120,
        justifyContent: 'center',
        alignItems: 'center'
    }
})