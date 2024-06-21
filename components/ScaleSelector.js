import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";

const scales = [
  "Major",
  "Minor",
  "PentatonicMajor",
  "PentatonicMinor",
  "Blues",
  "HarmonicMinor",
  "MelodicMinor",
  "Dorian",
  "Phrygian",
  "Lydian",
  "Mixolydian",
  "Locrian",
];

const ScaleSelector = ({ setSelectedScale }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedScale, setSelectedScaleInternal] = useState("");

  const handleScaleSelect = (scale) => {
    setSelectedScaleInternal(scale);
    setSelectedScale(scale);
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selectContainer}
        onPress={() => setShowModal(true)}
      >
        <Text style={styles.selectText}>
          {selectedScale
            ? selectedScale.replace(/([A-Z])/g, " $1").trim()
            : "-- Choose a Scale --"}
        </Text>
      </TouchableOpacity>

      <Modal visible={showModal} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {scales.map((scale) => (
              <TouchableOpacity
                key={scale}
                style={styles.scaleOption}
                onPress={() => handleScaleSelect(scale)}
              >
                <Text style={styles.scaleOptionText}>
                  {scale.replace(/([A-Z])/g, " $1").trim()}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: "0px",
  },
  selectContainer: {
    backgroundColor: "#ccc",
    borderWidth: 1,
    marginBottom: "10px",
    borderColor: "#ccc",
    borderRadius: "10px",
    padding: 15,
    width: 400,
    alignItems: "center",
  },
  selectText: {
    fontSize: 16,
    color: "#ff6347",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: 250,
    maxHeight: "auto",
    overflow: "scroll",
  },
  scaleOption: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  scaleOptionText: {
    fontSize: 16,
  },
});

export default ScaleSelector;
