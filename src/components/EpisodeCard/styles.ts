import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const ss = StyleSheet.create({
    container: {
        height: 110,
        width: '100%',
        backgroundColor: theme.colors.secondary,
        marginBottom: 20,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-around'
    },
    content: {
        flexDirection: 'row',
    },
    chip: {
        height: 28,
        width: 28,
        backgroundColor: theme.colors.primary,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    number: {
        fontSize: 18,
        color: theme.colors.background,
        fontFamily: theme.fonts.title,
        marginRight: 2,
        marginBottom: 2
    },
    title: {
        fontSize: 20,
        color: theme.colors.text1,
        fontFamily: theme.fonts.title,
        marginLeft: 10,
        flex: 1,
        marginTop: -5
    },
    date: {
        fontSize: 15,
        color: theme.colors.text2,
        fontFamily: theme.fonts.text400,
        marginLeft: 10,
        flex: 1,
    }
})