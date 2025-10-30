import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { db, auth } from "../api/firebase.js";
import { addDoc, collection } from "firebase/firestore";

export default function BookingScreen({ route, navigation }) {
  const { categoria } = route.params || {};
  const [servicio, setServicio] = useState("");
  const [profesional, setProfesional] = useState("");
  const [fecha, setFecha] = useState(new Date());
  const [hora, setHora] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const servicios = {
    barberia: ["Corte de cabello", "Afeitado", "Cejas"],
    spa: ["Masaje relajante", "Exfoliación", "Facial"],
    salon: ["Manicure", "Pedicure", "Tinte de cabello"],
  };

  const profesionales = {
    barberia: ["Carlos", "Mateo"],
    spa: ["Lucía", "Sofía"],
    salon: ["Valeria", "Ana"],
  };

  const handleAgendar = async () => {
    if (!servicio || !profesional || !fecha || !hora) {
      Alert.alert("Error", "Completa todos los campos");
      return;
    }

    try {
      const user = auth.currentUser;
      const fechaSeleccionada = fecha.toLocaleDateString();
      const horaSeleccionada = hora.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      await addDoc(collection(db, "citas"), {
        uid: user.uid,
        categoria,
        servicio,
        profesional,
        fecha: fechaSeleccionada,
        hora: horaSeleccionada,
        fechaCreacion: new Date().toISOString(),
      });

      Alert.alert("Cita agendada con éxito");
      navigation.navigate("Details", {
        categoria,
        servicio,
        profesional,
        fecha: fechaSeleccionada,
        hora: horaSeleccionada,
      });
    } catch (error) {
      Alert.alert("Error al agendar", error.message);
    }
  };

  const onChangeFecha = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) setFecha(selectedDate);
  };

  const onChangeHora = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) setHora(selectedTime);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Agendar en {categoria?.toUpperCase()}</Text>

        <View style={styles.card}>
          <Picker selectedValue={servicio} onValueChange={(v) => setServicio(v)}>
            <Picker.Item label="Selecciona un servicio" value="" />
            {servicios[categoria]?.map((s) => (
              <Picker.Item key={s} label={s} value={s} />
            ))}
          </Picker>

          <Picker
            selectedValue={profesional}
            onValueChange={(v) => setProfesional(v)}
          >
            <Picker.Item label="Selecciona un profesional" value="" />
            {profesionales[categoria]?.map((p) => (
              <Picker.Item key={p} label={p} value={p} />
            ))}
          </Picker>

          {/* Selector de fecha */}
          <TouchableOpacity
            style={styles.selector}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={styles.selectorText}>
              📅 Fecha: {fecha.toLocaleDateString()}
            </Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={fecha}
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={onChangeFecha}
              minimumDate={new Date()}
            />
          )}

          {/* Selector de hora */}
          <TouchableOpacity
            style={styles.selector}
            onPress={() => setShowTimePicker(true)}
          >
            <Text style={styles.selectorText}>
              🕒 Hora:{" "}
              {hora.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </Text>
          </TouchableOpacity>
          {showTimePicker && (
            <DateTimePicker
              value={hora}
              mode="time"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={onChangeHora}
            />
          )}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleAgendar}>
          <Text style={styles.buttonText}>Agendar cita</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f0ff",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 50, // deja espacio por si hay notch o barra inferior
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2d006b",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  selector: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginTop: 15,
  },
  selectorText: { fontSize: 16, color: "#333" },
  button: {
    backgroundColor: "#a413ec",
    borderRadius: 10,
    marginTop: 30,
    paddingVertical: 18,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
  },
});
