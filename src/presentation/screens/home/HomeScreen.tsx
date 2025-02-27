import React, { useEffect } from 'react'
import { Pressable, View } from 'react-native'
import { globalStyles } from '../../theme/theme';
import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { RootStackParams } from '../../routes/StackNavigator';
import { Text } from 'react-native-gesture-handler';

export const HomeScreen = () => {

    const navigate = useNavigation<NavigationProp<RootStackParams>>();

    useEffect(() => {
        navigate.setOptions({
            headerLeft: () => (
                <Pressable onPress={ () => navigate.dispatch( DrawerActions.toggleDrawer )}>
                    <Text>Menu</Text>
                </Pressable>
            )
        })
    });
    return (
        <View style={globalStyles.container}>
            <PrimaryButton onPress={ () => navigate.navigate('Products' ) } label="Products"/>
            <PrimaryButton onPress={ () => navigate.navigate('Settings' ) } label="Settings"/>
        </View>
    );
};
