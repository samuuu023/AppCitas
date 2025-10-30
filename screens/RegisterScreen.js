import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../api/firebase.js"; // 👈 tu configuración de Firebase

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "Por favor completa todos los campos.");
      return;
    }

    try {
      // 🔐 Crear usuario en Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 🧾 Guardar datos del usuario en Firestore
      await setDoc(doc(db, "usuarios", user.uid), {
        nombre: name,
        correo: email,
        creado: new Date().toISOString(),
        rol: "usuario",
      });

      Alert.alert("Registro exitoso", "Tu cuenta ha sido creada correctamente.", [
        {
          text: "Continuar",
          onPress: () => {
            // 🔹 Redirigir al AppTabs
            navigation.reset({
              index: 0,
              routes: [{ name: "AppTabs", params: { screen: "Service" } }],
            });
          },
        },
      ]);
    } catch (error) {
      // ⚠️ Manejo de errores comunes
      if (error.code === "auth/email-already-in-use") {
        Alert.alert("Error", "Este correo ya está registrado.");
      } else if (error.code === "auth/invalid-email") {
        Alert.alert("Error", "Correo electrónico inválido.");
      } else if (error.code === "auth/weak-password") {
        Alert.alert("Error", "La contraseña debe tener al menos 6 caracteres.");
      } else {
        Alert.alert("Error", error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear cuenta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarme</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.linkText}>¿Ya tienes cuenta? Inicia sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#a413ec",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#a413ec",
    paddingVertical: 15,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  linkText: {
    color: "#a413ec",
    fontSize: 14,
    marginTop: 10,
  },
});
