/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Pressable } from "react-native";
import { IonIcon } from "./IonIcon";
import { globalColors } from '../../theme/theme';

export const HamburguerMenu = () => {
    const navigate = useNavigation();

    useEffect(() => {
        navigate.setOptions({
            headerLeft: () => (
                <Pressable
                    onPress={() => navigate.dispatch(DrawerActions.toggleDrawer)}
                    style={{ marginLeft: 5 }}
                >
                    <IonIcon name="menu-outline" color={globalColors.primary} />
                </Pressable>
            ),
        });
    });

    return (<></>);
};
