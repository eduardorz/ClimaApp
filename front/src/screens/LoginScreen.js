import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { login } from '../services/authService';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const data = await login(email, password);
    if (data?.token) {
      Alert.alert('Login exitoso', 'Bienvenido a ClimaApp');
      navigation.navigate('Home'); // Redirige a la pantalla principal
    } else {
      Alert.alert('Error', 'Credenciales incorrectas');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        value={email} 
        onChangeText={setEmail} 
        keyboardType="email-address"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Contraseña" 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry 
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.linkText}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F4F4F4', // Fondo gris claro
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#FFF',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    elevation: 3, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    marginTop: 20,
    color: '#007bff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default LoginScreen;
