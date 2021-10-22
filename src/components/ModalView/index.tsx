import React, { ReactNode } from 'react'
import { View, Modal, TouchableWithoutFeedback, ModalProps } from 'react-native'
import { ss } from './styles'

type Props = ModalProps &
{
    children: ReactNode,
    outTap: () => void
}

export function ModalView({ children, outTap, ...rest }: Props) {
    return (
        <Modal
            transparent
            animationType="fade"
            statusBarTranslucent
            {...rest}>

            <View style={ss.overlay}>

                <TouchableWithoutFeedback onPress={outTap}>
                    <View style={{ flex: 1 }} />
                </TouchableWithoutFeedback>

                <View style={ss.container}>
                    <View style={ss.containerContent}>
                        <View style={ss.bar} />
                        {children}
                    </View>
                </View>

            </View>

        </Modal>
    )
}