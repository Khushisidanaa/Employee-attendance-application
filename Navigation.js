import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "./screens/LandingScreen";
import AddEmployees from "./screens/AddEmployees";
import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import Attendance from "./screens/Attendance";
import Tasks from "./screens/Tasks";
import Profile from "./screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import HomeTabNavigator from "./HomeTabNavigator";
import TaskList from "./screens/TaskList";
import AddTask from "./screens/AddTask";

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LandingScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="AddEmployees" component={AddEmployees} />
        <Stack.Screen name="HomeScreen" component={HomeTabNavigator} />
        <Stack.Screen name="Tasks" component={Tasks} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Attendance" component={Attendance} />
        <Stack.Screen name="TaskList" component={TaskList}/>
        <Stack.Screen name="AddTask" component={AddTask}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const AttendanceStackNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Attendance" component={Attendance} />
//     </Stack.Navigator>
//   );
// };

// const TaskStackNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Tasks" component={Tasks} />
//     </Stack.Navigator>
//   );
// };
// const ProfileStackNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Profile" component={Profile} />
//     </Stack.Navigator>
//   );
// };
// export {
//   MainStackNavigator,
//   AttendanceStackNavigator,
//   TaskStackNavigator,
//   ProfileStackNavigator,
// };
// // const HomeStackNavigator = () => {
// //   return (
// //     <Stack.Navigator>
// //       <Stack.Screen name="Home" component={Home} />
// //     </Stack.Navigator>
// //   );
// // };
// // export { MainStackNavigator, HomeStackNavigator };
