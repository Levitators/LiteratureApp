
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class ProfileScreen extends Component<{}> {

  public render() {
    return (
      <View style={styles.container}>
        <Text>Profile Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flex: 1,
    justifyContent: "center",
  },
});
