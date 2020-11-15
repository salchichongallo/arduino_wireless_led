import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, SafeAreaView } from "react-native";
import LightBulbContainer from './LightBulbContainer';

export default function App() {
  return (
    <SafeAreaView style={styles.area}>
      <StatusBar style="light" />
      <Text style={styles.title}>Presiona la bombilla</Text>
      <LightBulbContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222222",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 64,
  },
});
