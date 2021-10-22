import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const ss = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingBottom: 20
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    title: {
        fontSize: 36,
        color: theme.colors.text1,
        fontFamily: theme.fonts.title,
        marginTop: -3,
    },
    image: {
        position: 'absolute',
        right: -50,
        top: 30,
        height: 120,
        width: 120,
        transform: [{ rotate: '320deg' }]
    }
})