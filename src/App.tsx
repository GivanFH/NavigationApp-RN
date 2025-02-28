// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';
// import { BottomTabsNavigator } from './presentation/routes/BottomTabNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <SideMenuNavigator />
      {/* <BottomTabsNavigator /> */}
    </NavigationContainer>
  );
};
