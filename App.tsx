import React, { useState } from 'react';
import { MainPage } from './src/screens/MainPage';
import { PatrickHandSC_400Regular } from "@expo-google-fonts/patrick-hand-sc";
import { OpenSans_300Light, OpenSans_400Regular, OpenSans_600SemiBold } from "@expo-google-fonts/open-sans";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LoadingPage } from './src/screens/LoadingPage';
import { AppRoutes } from './src/routes';

export default function App() {

  const [FontsLoaded] = useFonts({
    PatrickHandSC_400Regular,
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
  })

  const [loaded, setLoaded] = useState(false);

  async function startTimer() {
    await new Promise(response => setTimeout(response, 1500));
    setLoaded(true);
  }

  if (!FontsLoaded) {
    return (
      <AppLoading />
    )
  } else if (!loaded) {
    startTimer();
    return (
      <LoadingPage />
    )
  } else {
    return (
      <AppRoutes />
    )
  }
}
