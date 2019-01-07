import React, { Component } from "react";
import { Button, StyleSheet, View } from "react-native";

export interface IProps {
  navigation: { navigate: (page: string) => void };
}
export default class HomeScreen extends Component<IProps> {

  public navigateToProfile = () => {
    const { navigate } = this.props.navigation;
    navigate("Profile");
  }

  public render() {

    return (
      <View style={styles.container}>
        <Button
          title="Log in"
          onPress={this.navigateToProfile}
        />
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
