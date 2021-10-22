import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const ss = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 110,
        backgroundColor: theme.colors.secondary,
        marginBottom: 20,
        borderRadius: 10,
        overflow: 'hidden'
    },
    image: {
        height: 110, width: 110
    },
    content: {
        marginHorizontal: 10,
        marginVertical: 5,
        justifyContent: 'space-evenly',
    },
    name: {
        fontSize: 22,
        color: theme.colors.text1,
        fontFamily: theme.fonts.title,
    },
    value: {
        fontSize: 12,
        color: theme.colors.text1,
        fontFamily: theme.fonts.text400,
        marginLeft: 3
    },
    valueView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})