// navigation/AppTabs.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ServiceScreen from "../screens/ServiceScreen";
import BookingScreen from "../screens/BookingScreen";
import DetailsScreen from "../screens/DetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Service"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#a413ec",
        tabBarInactiveTintColor: "#8e8e8e",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0.5,
          borderTopColor: "#ddd",
          height: 60,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarIcon: ({ color, size }) => {
          let iconName = "home-outline";

          switch (route.name) {
            case "Service":
              iconName = "home-outline";
              break;
            case "Booking":
              iconName = "calendar-outline";
              break;
            case "Details":
              iconName = "information-circle-outline";
              break;
            case "Profile":
              iconName = "person-outline";
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Service"
        component={ServiceScreen}
        options={{ title: "Inicio" }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{ title: "Agendar" }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: "Detalles" }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Perfil" }}
      />
    </Tab.Navigator>
  );
}
