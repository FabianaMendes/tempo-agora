import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { useFonts, Poppins_600SemiBold, Poppins_500Medium, Poppins_400Regular } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

import Stacks from './src/stacks';


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
      <Stacks />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
