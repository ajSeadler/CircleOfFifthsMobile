import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const keys = [
  { name: "C", angle: -90 },
  { name: "G", angle: -60 },
  { name: "D", angle: -30 },
  { name: "A", angle: 0 },
  { name: "E", angle: 30 },
  { name: "B", angle: 60 },
  { name: "F#", angle: 90 },
  { name: "Db", angle: 120 },
  { name: "Ab", angle: 150 },
  { name: "Eb", angle: 180 },
  { name: "Bb", angle: 210 },
  { name: "F", angle: 240 },
];

const CircleOfFifths = ({ selectedKey, setSelectedKey }) => {
  const circleRadius = 150; // Increased radius for more spacing between circles
  const circleCenter = 200; // Center position of the circle

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        {keys.map((key, index) => {
          const angle = key.angle;
          const radians = (angle * Math.PI) / 180;
          const x = circleCenter + circleRadius * Math.cos(radians);
          const y = circleCenter + circleRadius * Math.sin(radians);

          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.keyCircle,
                {
                  left: x - 32.5, // Adjusted to center the circle horizontally
                  top: y - 32.5, // Adjusted to center the circle vertically
                  backgroundColor:
                    key.name === selectedKey ? "#3B3561" : "#ff6347",
                },
              ]}
              onPress={() => setSelectedKey(key.name)}
            >
              <Text style={styles.keyText}>{key.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 200,
    width: 400, // Adjust the width of the container
    height: 400, // Adjust the height of the container
    overflow: "hidden",
  },
  circleContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  keyCircle: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 65, // Adjusted width of the key circle
    height: 65, // Adjusted height of the key circle
    borderRadius: 32.5, // Half of the width/height to make it a circle
  },
  keyText: {
    fontSize: 18, // Increased font size for better visibility
    fontWeight: "bold",
    color: "#fff",
  },
});

export default CircleOfFifths;
