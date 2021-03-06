import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const ss = StyleSheet.create({
    container: {
        marginLeft: 20,
        height: 140,
        maxWidth: 240,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 15,
        justifyContent: 'space-around',
        alignItems: 'center',
        
    },
    title: {
        fontSize: 15,
        color: theme.colors.text1,
        fontFamily: theme.fonts.text600,
        textAlign: 'center'
    },
    description: {
        fontSize: 12,
        color: theme.colors.text2,
        fontFamily: theme.fonts.text300
    },
    value: {
        fontSize: 12,
        color: theme.colors.text1,
        fontFamily: theme.fonts.text600
    }
})