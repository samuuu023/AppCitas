// Screens/PerfilScreen.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const navigation = useNavigation();

  const handleLogout = () => {
    alert("Sesión cerrada");
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Perfil</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.value}>Samuel Orellana</Text>

        <Text style={styles.label}>Correo:</Text>
        <Text style={styles.value}>samuel@example.com</Text>

        <Text style={styles.label}>Teléfono:</Text>
        <Text style={styles.value}>+503 7000-0000</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7f6f8", padding: 20 },
  title: { fontSize: 26, fontWeight: "800", color: "#111827", textAlign: "center", marginBottom: 25 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },
  label: { color: "#6B7280", fontWeight: "600", marginTop: 10 },
  value: { fontSize: 16, fontWeight: "700", color: "#111827" },
  button: {
    backgroundColor: "#a413ec",
    padding: 14,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: { color: "white", fontWeight: "700", fontSize: 16 },
});
