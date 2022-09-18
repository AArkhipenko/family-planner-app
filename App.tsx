import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import SettingsScreen from './src/screens/settings-screen';
import BudgetScreen from './src/screens/budget-screen';

const Drawer = createDrawerNavigator();

const App: React.FC = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="BudgetScreen">
                    <Drawer.Screen
                        name="Budget"
                        component={BudgetScreen}
                        options={{ title: 'Budget' }}
                        //options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
                    />
                    <Drawer.Screen
                        name="Settings"
                        component={SettingsScreen}
                        options={{ title: 'Settings' }}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;
