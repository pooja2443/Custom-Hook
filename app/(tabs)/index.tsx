import React from "react";
import { SafeAreaView } from "react-native";
import OnlineStatusIndicator from "@/Components/onlineStatusIndicator";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <OnlineStatusIndicator />
    </SafeAreaView>
  );
};

export default App;
