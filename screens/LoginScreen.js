import { useState } from 'react';
import { Layout, Input, ButtonRounded } from '../components';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [clave, setClave] = useState('');

    return (
        <Layout>
            <View style={styles.container}>
                <Text style={styles.title}>Academia Patty</Text>
                <Text style={styles.welcomeTitle}>Bienvenido</Text>
                <Text style={styles.subtitle}>Inicie sesión para administrar sus citas.</Text>
                
                <View style={styles.inputContainer}>
                    <Input 
                        label="Correo Electrónico"
                        placeholder=""
                        type="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Input 
                        label="Contraseña"
                        placeholder=""
                        hideText={true}
                        value={clave}
                        onChangeText={setClave}
                    />
                </View>

                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>¿Olvidó su contraseña?</Text>
                </TouchableOpacity>

                <ButtonRounded title="Iniciar Sesión" />    
            </View>
        </Layout>
    );
}

