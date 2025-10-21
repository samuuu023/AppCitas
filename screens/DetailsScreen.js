// screens/DetailsScreen.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function DetailsScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { category, service, staff, date } = route.params || {};

  const handleEdit = () => {
    navigation.navigate("Booking", {
      category,
      service,
      staff,
      date,
    });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Detalles de tu Cita</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Categoría:</Text>
          <Text style={styles.value}>{category}</Text>

          <Text style={styles.label}>Servicio:</Text>
          <Text style={styles.value}>{service}</Text>

          <Text style={styles.label}>Atenderá:</Text>
          <Text style={styles.value}>{staff}</Text>

          <Text style={styles.label}>Fecha y hora:</Text>
          <Text style={styles.value}>
            {new Date(date).toLocaleString([], {
              dateStyle: "full",
              timeStyle: "short",
            })}
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttonEdit} onPress={handleEdit}>
            <Text style={styles.buttonText}>Editar Cita</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonProfile}
            onPress={() => navigation.navigate("Profile")}
          >
            <Text style={styles.buttonText}>Ver en Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f7f6f8" },
  container: { flex: 1, padding: 20, alignItems: "center" },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 25,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    width: "100%",
    padding: 20,
    elevation: 3,
    marginBottom: 20,
  },
  label: { color: "#6B7280", fontWeight: "600", marginTop: 10 },
  value: { fontSize: 18, fontWeight: "700", color: "#111827" },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 10,
  },
  buttonEdit: {
    backgroundColor: "#f59e0b",
    flex: 1,
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonProfile: {
    backgroundColor: "#a413ec",
    flex: 1,
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: "700", fontSize: 16 },
});
