import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { MainPage } from '../screens/MainPage';
import { CharactersListPage } from '../screens/CharactersListPage';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { PageNames } from './pageNames';
import { EpisodesListPage } from '../screens/EpisodesListPage';

function AppRoutes() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer theme={DarkTheme}>
            <Stack.Navigator initialRouteName={PageNames.Main} screenOptions={{ headerShown: false }} >
                <Stack.Screen name={PageNames.Main} component={MainPage} />
                <Stack.Screen name={PageNames.CharList} component={CharactersListPage} />
                <Stack.Screen name={PageNames.EpisodesList} component={EpisodesListPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export { PageNames, AppRoutes }