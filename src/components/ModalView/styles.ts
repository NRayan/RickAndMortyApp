import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const ss = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.5)',
        justifyContent: 'flex-end'
    },
    container: {
        width: '100%',
        backgroundColor: theme.colors.background,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    containerContent: {
        paddingBottom: 20,
        maxWidth: 360,
        alignSelf: 'center'
    },
    bar: {
        width: 50,
        height: 2,
        borderRadius: 1,
        backgroundColor: theme.colors.line,
        alignSelf: 'center',
        marginVertical: 30
    }
})