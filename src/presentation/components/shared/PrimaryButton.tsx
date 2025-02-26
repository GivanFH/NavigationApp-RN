import React from 'react'
import { Pressable } from 'react-native'
import { Text } from 'react-native-gesture-handler'
import { globalStyles } from '../../theme/theme'

type PrimaryButtonProps = {
    onPress: () => void
    label: string
}

export const PrimaryButton = ({ onPress, label }: PrimaryButtonProps) => {
    return (
        <Pressable
            onPress={onPress}
            style={globalStyles.primaryButton}
        >
            <Text style={globalStyles.buttonText}>{label}</Text>
        </Pressable>
    )
}
