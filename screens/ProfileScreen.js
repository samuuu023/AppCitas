import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { signOut } from "firebase/auth";
import { auth, db } from "../api/firebase.js";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function ProfileScreen({ navigation }) {
  const [citas, setCitas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchCitas = async () => {
      try {
        const user = auth.currentUser;
        if (!user) return;

        setUserInfo({
          nombre: user.displayName || "Usuario",
          email: user.email,
        });

        const q = query(collection(db, "citas"), where("uid", "==", user.uid));
        const querySnapshot = await getDocs(q);
        const citasList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setCitas(citasList);
      } catch (error) {
        Alert.alert("Error", "No se pudieron cargar tus citas");
      } finally {
        setLoading(false);
      }
    };

    fetchCitas();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    Alert.alert("Sesión cerrada");
    navigation.navigate("Login");
  };

  const renderCita = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.service}>{item.servicio}</Text>
      <Text style={styles.detail}>
        {item.categoria} • {item.profesional}
      </Text>
      <Text style={styles.datetime}>
        📅 {item.fecha || "Fecha no asignada"} — 🕒 {item.hora}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Encabezado del usuario */}
        <View style={styles.header}>
          <Image
            source={{
              uri:
                "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
            }}
            style={styles.avatar}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{userInfo?.nombre}</Text>
            <Text style={styles.userEmail}>{userInfo?.email}</Text>
          </View>
        </View>

        <Text style={styles.title}>🧾 Historial de Citas</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#a413ec" style={{ marginTop: 20 }} />
        ) : citas.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No tienes citas registradas aún.</Text>
          </View>
        ) : (
          <FlatList
            data={citas}
            keyExtractor={(item) => item.id}
            renderItem={renderCita}
            showsVerticalScrollIndicator={false}
          />
        )}

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f0ff",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  userInfo: {
    flexDirection: "column",
  },
  userName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2d006b",
  },
  userEmail: {
    fontSize: 14,
    color: "#666",
    marginTop: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2d006b",
    marginBottom: 15,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  service: {
    fontSize: 18,
    fontWeight: "600",
    color: "#a413ec",
    marginBottom: 5,
  },
  detail: {
    fontSize: 15,
    color: "#444",
    marginBottom: 5,
  },
  datetime: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
  },
  logoutButton: {
    backgroundColor: "#a413ec",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
