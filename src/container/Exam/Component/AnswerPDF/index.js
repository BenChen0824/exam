import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    margin: 20,
  },
});

// Create Document Component
const AnswerPDF = () => (
  <Document>
    <Page>
      <View>
        <Text style={styles.title}>這是答案區</Text>
        <Text>Hewoe Werlds</Text>
        <Text>Hewoe Werlds</Text>
        <Text>Hewoe Werlds</Text>
        <Text>Hewoe Werlds</Text>
        <Text>Hewoe Werlds</Text>
        <Text>Hewoe Werlds</Text>
        <Text>Hewoe Werlds</Text>
        <Text>Hewoe Werlds</Text>
        <Text>Hewoe Werlds</Text>
        <Text>Hewoe Werlds</Text>
      </View>
    </Page>
  </Document>
);

export default AnswerPDF;
