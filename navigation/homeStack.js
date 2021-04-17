import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Posts from "../screens/Posts";
import Post from "../screens/Post";

const { Navigator, Screen } = createStackNavigator();

export default function HomeStack() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: styles.header,
        headerLeft: () => <Text style={styles.blogStyle}>BLOGPOSTS</Text>,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Posts" component={Posts} />
      <Screen name="Post" component={Post} />
    </Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "brown",
    alignItems: "center",
    justifyContent: "center",
  },
  blogStyle: {
    color: "#FFFFFF",
    fontSize: 35,
    fontWeight: "bold",
    marginLeft: 10,
    padding: 20,
  },
});
