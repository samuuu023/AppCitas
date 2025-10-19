import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Layout, Input, ButtonRounded } from '../components';

export default function BookingScreen() {
    const [servicio, setServicio] = useState('');
    const [fecha, setFecha] = useState('15/08/2024'); 
    const [hora, setHora] = useState('');
    const [profesional, setProfesional] = useState('');
    const [notas, setNotas] = useState('');

    const handleConfirmarCita = () => {
        // Lógica para confirmar la cita
        console.log("Cita confirmada:", { servicio, fecha, hora, profesional, notas });
    };

    return (
        <Layout>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => console.log('Volver')}>
                    <Text style={styles.closeIcon}>X</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Agendar Cita</Text>
                <View style={{ width: 24 }} /> 
            </View>

            <Input
                label="Servicio"
                placeholder="Seleccionar servicio"
                value={servicio}
                onChangeText={setServicio}
            />

            <Input
                label="Fecha"
                placeholder="15/08/2024"
                value={fecha}
                onChangeText={setFecha}
            />

            <Input
                label="Hora"
                placeholder="Seleccionar hora"
                value={hora}
                onChangeText={setHora}
            />

            <Input
                label="Profesional"
                placeholder="Cualquier profesional disponible"
                value={profesional}
                onChangeText={setProfesional}
            />

            <View style={styles.notasContainer}>
                <Text style={styles.label}>Notas Adicionales (Opcional)</Text>
                <Text style={styles.placeholderNotes}>Ej: alergia a ciertos productos, preferencia de estilo, etc.</Text>
                <TextInput
                    style={styles.textArea}
                    multiline
                    numberOfLines={4}
                    value={notas}
                    onChangeText={setNotas}
                />
            </View>

            <ButtonRounded
                title="Confirmar Cita"
                onPress={handleConfirmarCita}
            />
        </Layout>
    );
}


