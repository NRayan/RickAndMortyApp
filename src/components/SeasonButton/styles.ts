import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const ss = StyleSheet.create({
    container: {
        height: 40,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        borderColor: theme.colors.primary,
        marginLeft: 20,
        marginVertical:5
    },
    title: {
        fontSize: 19,
        color: theme.colors.primary,
        fontFamily: theme.fonts.title,
    }
})