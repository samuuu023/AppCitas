// screens/ProfileScreen.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const navigation = useNavigation();

  const [appointments, setAppointments] = useState([
    { id: "1", category: "Barbería", service: "Corte Clásico", date: "2025-10-25T10:00:00", status: "Próxima" },
    { id: "2", category: "Spa", service: "Masaje Relajante", date: "2025-09-30T14:00:00", status: "Pasada" },
    { id: "3", category: "Salón de Belleza", service: "Manicure", date: "2025-10-20T16:00:00", status: "Hoy" },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.category} - {item.service}</Text>
      <Text style={styles.dateText}>
        {new Date(item.date).toLocaleString([], { dateStyle: "medium", timeStyle: "short" })}
      </Text>
      <Text style={styles.status}>{item.status}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Mi Perfil</Text>
        <Text style={styles.subtitle}>Samuel Orellana</Text>

        <Text style={styles.label}>Historial de Citas</Text>

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ marginTop: 10 }}
        />

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.replace("Login")}
        >
          <Text style={styles.logoutText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f7f6f8" },
  container: { flex: 1, padding: 20 },
  title: { fontSize: 26, fontWeight: "800", color: "#111827", textAlign: "center" },
  subtitle: { textAlign: "center", color: "#6B7280", marginBottom: 20 },
  label: { fontSize: 18, fontWeight: "700", color: "#111827" },
  item: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 6,
    elevation: 2,
  },
  itemText: { fontSize: 16, fontWeight: "600", color: "#111827" },
  dateText: { color: "#6B7280", marginTop: 4 },
  status: { marginTop: 4, fontWeight: "700", color: "#a413ec" },
  logoutButton: {
    backgroundColor: "#a413ec",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  logoutText: { color: "white", fontWeight: "700", fontSize: 16 },
});

