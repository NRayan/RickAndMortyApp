import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const ss = StyleSheet.create({
    container: {
        height: 140,
        width: 140,
        borderRadius: 10,
        overflow: 'hidden',
        marginLeft: 20
    },
    image: {
        height: 140,
        width: 140,
    },
    title: {
        fontSize: 16,
        lineHeight: 16,
        color: theme.colors.text1,
        fontFamily: theme.fonts.title,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        textAlign: 'center',
    }
})