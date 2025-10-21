// screens/BookingScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function BookingScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { category } = route.params || { category: "Barbería" };

  // Listas según la categoría
  const serviceOptions = {
    Barbería: ["Corte Clásico", "Afeitado Premium", "Tinte de Barba"],
    "Salón de Belleza": ["Corte de Cabello", "Manicure", "Maquillaje Profesional"],
    Spa: ["Masaje Relajante", "Exfoliación", "Terapia de Piedras Calientes"],
  };

  const staffOptions = {
    Barbería: ["Carlos", "Luis", "Andrés"],
    "Salón de Belleza": ["Sofía", "Camila", "Valeria"],
    Spa: ["Daniela", "Roberto", "Melissa"],
  };

  const [service, setService] = useState(null);
  const [staff, setStaff] = useState(null);
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(false);
    setDate(currentDate);
  };

  const handleConfirm = () => {
    if (!service || !staff || !date) {
      alert("Por favor completa todos los campos.");
      return;
    }

    navigation.navigate("Details", {
      category,
      service,
      staff,
      date: date.toISOString(),
    });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Agendar Cita</Text>
        <Text style={styles.subtitle}>Categoría: {category}</Text>

        {/* Servicios */}
        <Text style={styles.label}>Selecciona un servicio:</Text>
        <FlatList
          horizontal
          data={serviceOptions[category] || []}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 10 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.option,
                service === item && styles.selectedOption,
              ]}
              onPress={() => setService(item)}
            >
              <Text
                style={[
                  styles.optionText,
                  service === item && styles.selectedOptionText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />

        {/* Personal disponible */}
        <Text style={[styles.label, { marginTop: 20 }]}>
          Personal disponible:
        </Text>
        <FlatList
          horizontal
          data={staffOptions[category] || []}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 10 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.option, staff === item && styles.selectedOption]}
              onPress={() => setStaff(item)}
            >
              <Text
                style={[
                  styles.optionText,
                  staff === item && styles.selectedOptionText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />

        {/* Fecha y hora */}
        <Text style={[styles.label, { marginTop: 20 }]}>Fecha y hora:</Text>
        <TouchableOpacity
          style={styles.dateButton}
          onPress={() => setShowPicker(true)}
        >
          <Text style={styles.dateText}>
            {date.toLocaleString([], {
              dateStyle: "medium",
              timeStyle: "short",
            })}
          </Text>
        </TouchableOpacity>

        {showPicker && (
          <DateTimePicker
            value={date}
            mode="datetime"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={onChangeDate}
            minimumDate={new Date()}
          />
        )}

        {/* Confirmar */}
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
          <Text style={styles.confirmText}>Confirmar Cita</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f7f6f8" },
  container: { flex: 1, padding: 20 },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#111827",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 20,
  },
  label: { fontSize: 16, fontWeight: "700", color: "#111827", marginBottom: 8 },
  option: {
    backgroundColor: "#E5E7EB",
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  selectedOption: { backgroundColor: "#a413ec" },
  optionText: { color: "#111827" },
  selectedOptionText: { color: "white", fontWeight: "700" },
  dateButton: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    elevation: 2,
    marginTop: 5,
  },
  dateText: { fontSize: 16, color: "#111827", textAlign: "center" },
  confirmButton: {
    backgroundColor: "#a413ec",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
  },
  confirmText: { color: "white", fontSize: 16, fontWeight: "700" },
});
