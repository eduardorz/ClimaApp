import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
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
    <View>
      <Text>Iniciar Sesión</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Ingresar" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
