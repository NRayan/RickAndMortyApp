import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { MainPage } from '../screens/MainPage';
import { CharactersList } from '../screens/CharactersList';
import { NavigationContainer } from '@react-navigation/native';

const PageNames =
{
    Main: 'MainPage',
    CharList: 'CharactersList',
}

function AppRoutes() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={PageNames.Main} screenOptions={{ headerShown: false }} >
                <Stack.Screen name={PageNames.Main} component={MainPage} />
                <Stack.Screen name={PageNames.CharList} component={CharactersList} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export { PageNames, AppRoutes }