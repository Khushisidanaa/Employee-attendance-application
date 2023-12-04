import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
//import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./screens/HomeScreen";
import Tasks from "./screens/Tasks";
import Attendance from "./screens/Attendance";
import Profile from "./screens/Profile";
import TaskList from "./screens/TaskList";

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={"HomeScreen"}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <Fontisto name="search" size={25}/>,
        }}
      />
      <Tab.Screen
        name={"Attendance"}
        component={Attendance}
        options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name="calendar" size={25} />,
        }}
      />
      <Tab.Screen
        name={"Tasklist"}
        component={TaskList}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome5 name="tasks" size={25} />,
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name="user" size={25} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
