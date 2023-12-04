import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AttendanceStackNavigator,
  MainStackNavigator,
  ProfileStackNavigator,
  TaskStackNavigator,
} from "./Navigation";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

import React from "react";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Attendance") {
            iconName = focused ? "calendar-day" : "calendar-day";
          } else if (route.name === "Tasks") {
            iconName = focused ? "clipboard" : "iclipboard";
          } else if (route.name === "Profile") {
            iconName = focused ? "user" : "user";
          }

          return <FontAwesome5Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Attendance" component={AttendanceStackNavigator} />
      <Tab.Screen name="Tasks" component={TaskStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
