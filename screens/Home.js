import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

import Posts from './Posts';

export default function Home() {
  const [posts, setPosts] = useState();
  const { navigate } = useNavigation();

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => setPosts(json));

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container}>
        <Text
          style={styles.btn}
          onPress={() => navigate("Posts", { PostsObj: posts })}
        >
          Get Posts
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    color: "white",
    fontSize: 20,
    width: 350,
    height: 50,
    textAlign: "center",
    backgroundColor: "#7868e6",
    lineHeight: 50,
  },
});
