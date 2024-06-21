import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMusic, faGuitar, faChartLine } from "../assets/FontAwesomeIcons"; // Adjust the path as per your FontAwesomeIcons.js location

const WelcomeComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>The Circle of Fifths</Text>
      <Text style={styles.subHeading}>visualizer</Text>
      <Text style={styles.description}>
        Click on a key on the circle of fifths{" "}
        <Text style={styles.link}>below</Text> to get started.
      </Text>

      <TouchableOpacity style={styles.featureLink}>
        <View style={styles.feature}>
          <FontAwesomeIcon icon={faMusic} style={styles.featureIcon} />
          <Text style={styles.featureHeading}>Discover Scales</Text>
          <Text style={styles.featureText}>
            Explore a variety of musical scales and modes including major,
            minor, pentatonic, and more.
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.featureLink}>
        <View style={styles.feature}>
          <FontAwesomeIcon icon={faGuitar} style={styles.featureIcon} />
          <Text style={styles.featureHeading}>View Chords</Text>
          <Text style={styles.featureText}>
            Learn about chords associated with each scale and their degrees.
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.featureLink}>
        <View style={styles.feature}>
          <FontAwesomeIcon icon={faChartLine} style={styles.featureIcon} />
          <Text style={styles.featureHeading}>Interactive Interface</Text>
          <Text style={styles.featureText}>
            Click on a key to visualize the notes and chords in the selected
            scale.
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 50,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textTransform: "uppercase",
    letterSpacing: 2,
    marginBottom: 5,
  },
  subHeading: {
    fontSize: 16,
    color: "#ff6347",
    textTransform: "uppercase",
    letterSpacing: 2,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  link: {
    color: "ff6347",
    fontWeight: "bolder",
    textDecorationLine: "underline",
  },
  featureLink: {
    width: "100%",
    marginBottom: 20,
  },
  feature: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  featureIcon: {
    fontSize: 40,
    color: "#ff6347",
    marginBottom: 10,
  },
  featureHeading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  featureText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
});

export default WelcomeComponent;
