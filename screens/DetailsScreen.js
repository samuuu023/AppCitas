// Screens/DetalleScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles de tu cita</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Servicio:</Text>
        <Text style={styles.value}>Corte de cabello</Text>

        <Text style={styles.label}>Fecha:</Text>
        <Text style={styles.value}>25 de Octubre, 2025</Text>

        <Text style={styles.label}>Hora:</Text>
        <Text style={styles.value}>3:00 PM</Text>
      </View>

      <Text style={styles.note}>Puedes editar o cancelar tu cita desde esta pantalla.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7f6f8", padding: 20 },
  title: { fontSize: 26, fontWeight: "800", color: "#111827", textAlign: "center", marginBottom: 20 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },
  label: { color: "#6B7280", fontWeight: "600", marginTop: 10 },
  value: { fontSize: 16, fontWeight: "700", color: "#111827" },
  note: { textAlign: "center", marginTop: 30, color: "#6B7280" },
});
