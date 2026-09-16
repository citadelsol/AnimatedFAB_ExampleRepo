import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { AnimatedFAB } from "react-native-paper";

export default function Index() {
  const [isExtended, setIsExtended] = React.useState<boolean>(false);

  return (
    <View style={styles.container}>
      <AnimatedFAB
        icon={"plus"}
        label={"Extended"}
        extended={isExtended}
        onPress={() => {
          setIsExtended(!isExtended);
          console.log("lwk extended");
        }}
        style={{ top: 20, right: 20, position: "absolute" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
