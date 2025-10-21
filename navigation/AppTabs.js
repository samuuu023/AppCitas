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
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0.5,
          borderTopColor: "#ccc",
          height: 60,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarIcon: ({ color, size }) => {
          let iconName = "ellipse";
          if (route.name === "Service") iconName = "home-outline";
          else if (route.name === "Booking") iconName = "calendar-outline";
          else if (route.name === "Details") iconName = "information-circle-outline";
          else if (route.name === "Profile") iconName = "person-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Service" component={ServiceScreen} options={{ title: "Menú" }} />
      <Tab.Screen name="Booking" component={BookingScreen} options={{ title: "Agendar" }} />
      <Tab.Screen name="Details" component={DetailsScreen} options={{ title: "Detalles" }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: "Perfil" }} />
    </Tab.Navigator>
  );
}
