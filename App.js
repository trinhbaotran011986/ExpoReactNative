import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";
import { useFonts } from "expo-font";
import React, { Suspense, useCallback } from "react";
import { PersistGate } from "redux-persist/integration/react";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from 'react-redux';
import { MaterialIcons } from "@expo/vector-icons";
import configureStores from "./store/store";
import navigationUtils from './utils/navigationUtils';


SplashScreen.preventAutoHideAsync();
export default function App() {
  const store = configureStores();
  const [fontsLoaded] = useFonts({
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Suspense fallback={<ActivityIndicator size={18} />}>
          <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
               
               <Navigation/>
          </View>
        </Suspense>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
