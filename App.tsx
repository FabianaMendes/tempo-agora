import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import Stacks from './src/stacks';

import { useFonts, Poppins_600SemiBold, Poppins_500Medium, Poppins_400Regular } from '@expo-google-fonts/poppins';

import { CepsProvider } from './src/contexts/UserContext';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <CepsProvider>
        <Stacks />
        <StatusBar style="auto" />
      </CepsProvider>
    </NavigationContainer>
  );
}
