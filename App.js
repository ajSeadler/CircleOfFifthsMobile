import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import WelcomeComponent from "./components/WelcomeComponent";
import CircleOfFifths from "./components/CircleOfFifths";
import ScaleSelector from "./components/ScaleSelector";
import ScaleDisplay from "./components/ScaleDisplay";

const App = () => {
  const [selectedKey, setSelectedKey] = useState("");
  const [selectedScale, setSelectedScale] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <WelcomeComponent />
        <ScaleSelector setSelectedScale={setSelectedScale} />
        <CircleOfFifths
          selectedKey={selectedKey}
          setSelectedKey={setSelectedKey}
        />
        <ScaleDisplay selectedKey={selectedKey} selectedScale={selectedScale} />
        <View style={styles.bottomPadding} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomPadding: {
    height: 400, // Adjust this value as needed to add padding at the bottom for scrolling
  },
});

export default App;
