import { useState } from 'react';
import { Layout, Input, ButtonRounded } from '../components';

export default function RegisterScreen() {
    const [nombre, setNombre] = useState('');
    const [genero, setGenero] = useState(null);
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [confirmarContrasena, setConfirmarContrasena] = useState('');

    return (
        <Layout>
            <View style={styles.header}>
                <Text style={styles.academyTitle}>Academia Patty</Text>
                <Text style={styles.screenTitle}>Crear Cuenta</Text>
            </View>

            <Input
                label="Nombre completo"
                placeholder=""
                type="default"
                value={nombre}
                onChangeText={setNombre}
            />

            <Input
                label="Fecha de nacimiento"
                placeholder=""
                type="default"
                value={fechaNacimiento}
                onChangeText={setFechaNacimiento}
            />

            <Input
                label="Dirección de correo electrónico"
                placeholder=""
                type="email-address"
                value={email}
                onChangeText={setEmail}
            />

            <Input
                label="Contraseña"
                placeholder=""
                hideText={true}
                value={contrasena}
                onChangeText={setContrasena}
            />

            <Input
                label="Confirmar contraseña"
                placeholder=""
                hideText={true}
                value={confirmarContrasena}
                onChangeText={setConfirmarContrasena}
            />

            <ButtonRounded title="Crear Cuenta" />
        </Layout>
    );
}

