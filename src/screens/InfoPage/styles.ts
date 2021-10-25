import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const ss = StyleSheet.create({
    container: {
        width: '100%',
    },
    inlineContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        alignSelf: 'center',
        fontSize: 26,
        color: theme.colors.text1,
        fontFamily: theme.fonts.title,
        marginBottom: 20
    },
    subTitle: {
        fontSize: 16,
        color: theme.colors.text1,
        fontFamily: theme.fonts.text600,
        marginBottom: 5
    },
    value: {
        fontSize: 15,
        color: theme.colors.text1,
        fontFamily: theme.fonts.text400,
        marginLeft: 5
    }
})