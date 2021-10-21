import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const ss = StyleSheet.create({
    container: {
        height: 120,
        width: 120,
        borderRadius: 10,
        overflow: 'hidden',
        marginLeft: 20
    },
    image: {
        height: 120,
        width: 120,
    },
    title: {
        fontSize: 16,
        // color: theme.colors.text2,
        color: '#000',
        fontFamily: theme.fonts.title,
        position: 'absolute',
        alignSelf: 'center'

    }
})