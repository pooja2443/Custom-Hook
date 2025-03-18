import React from "react";
import { View, Text, StyleSheet } from "react-native";
import useOnlineStatus from "@/hooks/useOnlineStatus";

const OnlineStatusIndicator = () => {
  const isConnected  = useOnlineStatus();

  return (
    <View style={[styles.container, { backgroundColor: isConnected ? "green" : "red" }]}>
      <Text style={styles.text}>
        {isConnected === null ? "Checking..." : isConnected ? "Online" : "Offline"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default OnlineStatusIndicator;
