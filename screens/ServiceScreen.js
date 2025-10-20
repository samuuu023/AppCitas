// Screens/MenuScreen.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ServiceScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Servicios disponibles</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Agendar")}
      >
        <Text style={styles.cardText}>💇 Corte de cabello</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Agendar")}
      >
        <Text style={styles.cardText}>💅 Manicure y pedicure</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Agendar")}
      >
        <Text style={styles.cardText}>💆 Masajes relajantes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7f6f8", padding: 20 },
  title: { fontSize: 26, fontWeight: "800", marginBottom: 25, textAlign: "center", color: "#111827" },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    elevation: 3,
  },
  cardText: { fontSize: 18, fontWeight: "600", color: "#333" },
});
