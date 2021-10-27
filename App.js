import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Asset, useAssets } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Image, Text } from "react-native";

export default function App() {
  const [assets] = useAssets([require("./loading.jpeg")]);
  const [loaded] = Font.useFonts(Ionicons.font);
  if (!assets || !loaded) {
    return <AppLoading />;
  }
  return <Text>We are done loading!</Text>;
}
