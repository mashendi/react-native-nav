import React from "react";
import { StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import Profile from "../screens/Profile";
import HomeStack from "./homeStack";

const { Navigator, Screen } = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Navigator
      initialRouteName="HomeStack"
      tabBarOptions={{
        style: styles.tabBar,
      }}
    >
      <Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.active : styles.inactive}>Home</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={24}
              style={focused ? styles.active : styles.inactive}
            />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.active : styles.inactive}>
              Profile
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="user"
              size={24}
              style={focused ? styles.active : styles.inactive}
            />
          ),
        }}
      />
    </Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#7868e6",
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    color: "white",
  },
  inactive: {
    color: "#edf7",
  },
});
