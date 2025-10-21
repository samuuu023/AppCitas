// navigation/AppDrawer.js (opcional)
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppTabs from "./AppTabs";
import ProfileScreen from "../screens/ProfileScreen";

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Inicio" component={AppTabs} />
      <Drawer.Screen name="Perfil" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
