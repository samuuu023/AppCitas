import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function DetailsScreen({ route, navigation }) {
  const { categoria, servicio, profesional, fecha, hora } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles de tu cita</Text>

      <View style={styles.card}>
        <Text style={styles.item}>Categoría: {categoria}</Text>
        <Text style={styles.item}>Servicio: {servicio}</Text>
        <Text style={styles.item}>Profesional: {profesional}</Text>
        <Text style={styles.item}>Fecha: {fecha ? fecha : "No seleccionada"}</Text>
        <Text style={styles.item}>Hora: {hora ? hora : "No seleccionada"}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Booking", {
            categoria,
            servicio,
            profesional,
            fecha,
            hora,
          })
        }
      >
        <Text style={styles.buttonText}>Editar cita</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#666" }]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.buttonText}>Ver perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    width: "90%",
    padding: 20,
    backgroundColor: "#f2f2f2",
    borderRadius: 15,
    marginBottom: 30,
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    width: "90%",
    backgroundColor: "#a413ec",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
