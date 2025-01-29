import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import WeatherCard from "../components/WeatherCard";
import getWeatherData from "../api/weatherApi";

const HomeScreen = () => {
  const [ciudad, setCiudad] = useState("Buenos Aires");
  const [clima, setClima] = useState(null);

  const obtenerClima = async () => {
    const datos = await getWeatherData(ciudad);
    if (datos) setClima(datos);
  };

  useEffect(() => {
    obtenerClima();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clima App 🌤️</Text>
      <TextInput
        style={styles.input}
        value={ciudad}
        onChangeText={setCiudad}
        placeholder="Ingresa una ciudad"
      />
      <Button title="Buscar Clima" onPress={obtenerClima} />
      {clima && <WeatherCard clima={clima} />} 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    width: "80%",
    padding: 5,
    marginBottom: 10,
    textAlign: "center",
  },
});

export default HomeScreen;
