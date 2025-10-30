// screens/ServiceScreen.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ServiceScreen({ navigation }) {
  const categories = [
    { id: "barberia", name: "Barbería", icon: "cut-outline", color: "#6A1B9A" },
    { id: "spa", name: "Spa", icon: "flower-outline", color: "#00897B" },
    { id: "salon", name: "Salón de Belleza", icon: "color-palette-outline", color: "#D81B60" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona una categoría</Text>
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat.id}
          style={[styles.card, { borderColor: cat.color }]}
          onPress={() => navigation.navigate("Booking", { categoria: cat.id })}
        >
          <Ionicons name={cat.icon} size={45} color={cat.color} />
          <Text style={styles.cardText}>{cat.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 25, color: "#333" },
  card: {
    width: "90%",
    borderWidth: 2,
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    elevation: 4,
  },
  cardText: { fontSize: 18, fontWeight: "600", marginTop: 10, color: "#333" },
});
