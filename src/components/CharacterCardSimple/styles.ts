import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const ss = StyleSheet.create({
    container: {
        height: 152,
        width: 140,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginLeft: 20,
    },
    content: {
        height: 140,
        width: 140,
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        height: 140,
        width: 140,
        borderRadius: 10,
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
    },
    statusIcon: {
        position: 'absolute',
        right: -12,
        top: -0,
        height: 24,
        width: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 100
    }
})