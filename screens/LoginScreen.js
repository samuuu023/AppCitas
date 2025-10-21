// Screens/LoginScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (correo === "samuel@example.com" && password === "12345") {
      navigation.replace("AppTabs"); //menú principal 
    } else if (correo && password) {
      alert("Credenciales incorrectas");
    } else {
      alert("Completa todos los campos");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.subtitle}>Inicia sesión para continuar</Text>

      <TextInput
        placeholder="Correo electrónico"
        placeholderTextColor="#9CA3AF"
        style={styles.input}
        value={correo}
        onChangeText={setCorreo}
      />

      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#9CA3AF"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.link}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f7f6f8", padding: 20 },
  title: { fontSize: 30, fontWeight: "900", color: "#111827", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#6B7280", marginBottom: 30 },
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
  link: { marginTop: 15, color: "#a413ec", fontWeight: "500" },
});
