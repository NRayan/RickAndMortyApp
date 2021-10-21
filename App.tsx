import React from 'react';
import { MainPage } from './src/screens/MainPage';
import { PatrickHandSC_400Regular } from "@expo-google-fonts/patrick-hand-sc";
import { OpenSans_400Regular, OpenSans_600SemiBold } from "@expo-google-fonts/open-sans";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [fontsLoaded] = useFonts({
    PatrickHandSC_400Regular,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <MainPage />
  );
}
