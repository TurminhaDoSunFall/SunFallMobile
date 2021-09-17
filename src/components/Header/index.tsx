import React from "react";
import { Image, View , StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#FF7F27",
  },
 
  image: {
    width: "50%",
    alignItems: "center",
  },
  
})
