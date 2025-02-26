import React from 'react'
import { View } from 'react-native'
import { globalStyles } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';

export const HomeScreen = () => {

    const navigate = useNavigation();

    return (
        <View style={globalStyles.container}>
            <PrimaryButton onPress={ () => navigate.navigate('Products' as never) } label="Products"/>
            <PrimaryButton onPress={ () => navigate.navigate('Settings' as never) } label="Settings"/>
        </View>
    );
};
