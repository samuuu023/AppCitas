// screens/ServiceScreen.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ServiceScreen() {
  const navigation = useNavigation();

  // Lista de categorías (servicios)
  const services = [
    {
      id: 1,
      name: "Barbería", // 👈 corregido (antes "Cool Barber Shop")
      icon: "cut-outline",
      color: "#a413ec",
    },
    {
      id: 2,
      name: "Salón de Belleza",
      icon: "color-palette-outline",
      color: "#a413ec",
    },
    {
      id: 3,
      name: "Spa", // 👈 coincide con BookingScreen
      icon: "flower-outline",
      color: "#a413ec",
    },
  ];

  // Enviar categoría a BookingScreen
  const handleSelectCategory = (category) => {
    navigation.navigate("Booking", { category }); // ✅ parámetro correcto
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Elige tu servicio</Text>

        <View style={styles.grid}>
          {services.map((service) => (
            <TouchableOpacity
              key={service.id}
              style={styles.card}
              onPress={() => handleSelectCategory(service.name)}
            >
              <Ionicons
                name={service.icon}
                size={50}
                color={service.color}
                style={{ marginBottom: 10 }}
              />
              <Text style={styles.serviceName}>{service.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f7f6f8",
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 30,
  },
  grid: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  card: {
    width: "40%",
    backgroundColor: "#fff",
    paddingVertical: 30,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    marginVertical: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    textAlign: "center",
  },
});
