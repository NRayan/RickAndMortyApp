import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const ss = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        backgroundColor: theme.colors.secondary,
        borderRadius: 100,
        paddingHorizontal: 25,
        paddingVertical: 15,
    },
    input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 14,
        color: theme.colors.text1,
        fontFamily: theme.fonts.text400,
    }
})