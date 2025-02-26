import { Text, View } from 'react-native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { useNavigation } from '@react-navigation/native';


export const ProductScreen = () => {
    const navigate = useNavigation();

    return (
        <View>
            <Text>
                Product Screen
            </Text>
            <Text style={{ marginBottom: 10, fontSize: 30 }}>Ajustes</Text>
            <PrimaryButton
                onPress={() => navigate.navigate('Products' as never)}
                label='Productos'
            />
        </View>
    );
};
