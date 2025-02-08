import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import authService from "../services/authService";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }
    
    try {
      const response = await authService.register({ name, email, password });
      Alert.alert("Éxito", "Registro exitoso");
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Error", error.message || "Hubo un problema al registrarse");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.linkText}>¿Ya tienes cuenta? Inicia sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { width: "100%", padding: 10, borderWidth: 1, borderColor: "#ccc", borderRadius: 5, marginBottom: 10 },
  button: { backgroundColor: "#007bff", padding: 10, borderRadius: 5, width: "100%", alignItems: "center" },
  buttonText: { color: "white", fontSize: 16 },
  linkText: { marginTop: 10, color: "#007bff" }
});

export default RegisterScreen;
