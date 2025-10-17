import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Layout, Input, ButtonRounded } from "./Components";

export default function App() {
  return (
    <Layout title="Contacto">
      <Input label="Email:" placeholder="name@mail.com" type="email-address" />
      <Input label="Asunto:" placeholder="Consulta" />
      <Input label="Mensaje:" placeholder="Escribe aquí..." lines={4} />
    </Layout>
  );
}
