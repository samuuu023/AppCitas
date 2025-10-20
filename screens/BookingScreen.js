// Screens/AgendarScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function BookingScreen({ navigation }) {
  const [servicio, setServicio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const handleAgendar = () => {
    if (servicio && fecha && hora) {
      alert("Cita agendada con éxito");
      navigation.navigate("Detalles");
    } else {
      alert("Completa todos los campos");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar cita</Text>

      <TextInput
        placeholder="Servicio (Ej: Corte, Uñas, Masaje)"
        placeholderTextColor="#9CA3AF"
        style={styles.input}
        value={servicio}
        onChangeText={setServicio}
      />
      <TextInput
        placeholder="Fecha (Ej: 25/10/2025)"
        placeholderTextColor="#9CA3AF"
        style={styles.input}
        value={fecha}
        onChangeText={setFecha}
      />
      <TextInput
        placeholder="Hora (Ej: 3:00 PM)"
        placeholderTextColor="#9CA3AF"
        style={styles.input}
        value={hora}
        onChangeText={setHora}
      />

      <TouchableOpacity style={styles.button} onPress={handleAgendar}>
        <Text style={styles.buttonText}>Confirmar cita</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7f6f8", padding: 20, justifyContent: "center" },
  title: { fontSize: 26, fontWeight: "800", textAlign: "center", color: "#111827", marginBottom: 25 },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    backgroundColor: "white",
    marginBottom: 15,
  },
  button: { backgroundColor: "#a413ec", padding: 14, borderRadius: 10, width: "100%", alignItems: "center" },
  buttonText: { color: "white", fontWeight: "700", fontSize: 16 },
});
