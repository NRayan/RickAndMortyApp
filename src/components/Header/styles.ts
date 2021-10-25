import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const ss = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    title: {
        fontSize: 36,
        color: theme.colors.text1,
        fontFamily: theme.fonts.title,
        marginTop: -3,
    },
})