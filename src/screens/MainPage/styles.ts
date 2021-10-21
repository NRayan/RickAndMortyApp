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
        height: 140,
        paddingRight: 20
    },
    locationsScrollContainer: {
        height: 150,
        paddingRight: 30,
        alignItems: 'flex-end'
    },
    locationsView: {
        marginTop: 40
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 20,
        paddingTop: 60
    },
    footerLine: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})