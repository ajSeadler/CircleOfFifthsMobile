import React, { useEffect, useRef } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { getNoteName } from "../utils/noteMapping";

const scales = {
  Major: {
    intervals: [0, 2, 4, 5, 7, 9, 11],
    chords: ["maj", "min", "min", "maj", "maj", "min", "dim"],
    degrees: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
  },
  Minor: {
    intervals: [0, 2, 3, 5, 7, 8, 10],
    chords: ["min", "dim", "maj", "min", "min", "maj", "maj"],
    degrees: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
  },
  PentatonicMajor: {
    intervals: [0, 2, 4, 7, 9],
    chords: [],
    degrees: ["I", "II", "III", "V", "VI"],
  },
  PentatonicMinor: {
    intervals: [0, 3, 5, 7, 10],
    chords: [],
    degrees: ["I", "III", "IV", "V", "VII"],
  },
  Blues: {
    intervals: [0, 3, 5, 6, 7, 10],
    chords: [],
    degrees: ["I", "III", "IV", "bV", "V", "VII"],
  },
  HarmonicMinor: {
    intervals: [0, 2, 3, 5, 7, 8, 11],
    chords: ["min", "dim", "aug", "min", "maj", "maj", "dim"],
    degrees: ["i", "ii°", "III+", "iv", "V", "VI", "vii°"],
  },
  MelodicMinor: {
    intervals: [0, 2, 3, 5, 7, 9, 11],
    chords: ["min", "min", "aug", "maj", "maj", "dim", "dim"],
    degrees: ["i", "ii", "III+", "IV", "V", "vi°", "vii°"],
  },
  Dorian: {
    intervals: [0, 2, 3, 5, 7, 9, 10],
    chords: ["min", "min", "maj", "maj", "min", "dim", "maj"],
    degrees: ["i", "ii", "bIII", "IV", "v", "vi°", "bVII"],
  },
  Phrygian: {
    intervals: [0, 1, 3, 5, 7, 8, 10],
    chords: ["min", "maj", "maj", "min", "dim", "maj", "min"],
    degrees: ["i", "bII", "bIII", "iv", "v°", "bVI", "bvii"],
  },
  Lydian: {
    intervals: [0, 2, 4, 6, 7, 9, 11],
    chords: ["maj", "maj", "min", "dim", "maj", "min", "maj"],
    degrees: ["I", "II", "iii", "#IV°", "V", "vi", "VII"],
  },
  Mixolydian: {
    intervals: [0, 2, 4, 5, 7, 9, 10],
    chords: ["maj", "min", "dim", "maj", "maj", "min", "maj"],
    degrees: ["I", "ii", "iii°", "IV", "V", "vi", "bVII"],
  },
  Locrian: {
    intervals: [0, 1, 3, 5, 6, 8, 10],
    chords: ["dim", "min", "maj", "min", "maj", "maj", "maj"],
    degrees: ["i°", "bII", "bIII", "iv", "v", "bVI", "bVII"],
  },
};

const ScaleDisplay = ({ selectedKey, selectedScale }) => {
  const scaleDisplayRef = useRef(null);

  useEffect(() => {
    if (selectedKey && selectedScale && scaleDisplayRef.current) {
      scaleDisplayRef.current.scrollTo({ y: 0, animated: true });
    }
  }, [selectedKey, selectedScale]);

  if (!selectedKey || !selectedScale) return null;

  const scale = scales[selectedScale];
  const notes = scale.intervals.map((interval) =>
    getNoteName(selectedKey, interval)
  );

  return (
    <View contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{selectedScale} Scale</Text>
        <Text style={styles.subtitle}>Key of {selectedKey}</Text>
      </View>
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <View style={[styles.cell, styles.noteCell]}>
            <Text style={styles.headerText}>Note Name</Text>
          </View>
          {scale.chords.length > 0 && (
            <View style={[styles.cell, styles.chordCell]}>
              <Text style={styles.headerText}>Chord Type</Text>
            </View>
          )}
          <View style={[styles.cell, styles.degreeCell]}>
            <Text style={styles.headerText}>Degree</Text>
          </View>
        </View>
        {notes.map((note, index) => (
          <View key={index} style={styles.tableRow}>
            <View style={[styles.cell, styles.noteCell]}>
              <Text style={[styles.cellText, styles.bold]}>{note}</Text>
            </View>
            {scale.chords.length > 0 && (
              <View style={[styles.cell, styles.chordCell]}>
                <Text style={[styles.cellText, styles.bold]}>
                  {note} {scale.chords[index]}
                </Text>
              </View>
            )}
            <View style={[styles.cell, styles.degreeCell]}>
              <Text style={[styles.cellText, styles.bold]}>
                {scale.degrees[index]}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF5", // Custom white and orange color scheme
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#F27E63", // Custom orange color
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
  },
  tableContainer: {
    width: 350,
    marginTop: 20,
    height: 100,
    marginBottom: 0,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#F27E63", // Custom orange color for header background
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
    width: "100%",
  },
  cell: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  noteCell: {
    flex: 2,
  },
  chordCell: {
    flex: 2,
  },
  degreeCell: {
    flex: 1,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFDF5", // Custom white color
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingVertical: 10,
  },
  cellText: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
  bold: {
    fontWeight: "bold",
  },
});

export default ScaleDisplay;
