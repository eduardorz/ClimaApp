import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const WeatherCard = ({ weatherData }) => {
  console.log("weatherCard recibió: ", weatherData);
    if (!weatherData || !weatherData.location) {
      return (
        <View style={styles.card}>
          <Text style={styles.text}>Cargando datos del clima...</Text>
        </View>
      );
    }
  
    return (
      <View style={styles.card}>
        <Text style={styles.text}>Ciudad: {weatherData.location.name}</Text>
        <Text style={styles.text}>País: {weatherData.location.country}</Text>
        <Text style={styles.text}>Temperatura: {weatherData.current.temp_c}°C</Text>
        <Text style={styles.text}>Condición: {weatherData.current.condition.text}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#4a90e2",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  city: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  icon: {
    width: 50,
    height: 50,
    marginVertical: 10,
  },
  temperature: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  condition: {
    fontSize: 16,
    color: "white",
  },
  extraInfo: {
    fontSize: 14,
    color: "white",
    marginTop: 5,
  },
});

export default WeatherCard;
