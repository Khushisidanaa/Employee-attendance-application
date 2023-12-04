import { View, Text, SafeAreaView, TextInput, Pressable } from "react-native";
import React from "react";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import Login from "./Login";
import WelcomeScreen from "./WelcomeScreen";
import HomeScreen from "./HomeScreen";

export default function AddEmployees({ navigation }) {
  return (
    <SafeAreaView>
      <View
        style={{
          fontFamily: "Helvetica",
          marginTop: 70,
          marginLeft: 30,
          marginRight: 30,
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 30, textAlign: "center" }}>
          Welcome to
        </Text>
        <Text
          style={{
            marginTop: 15,
            fontWeight: "800",
            fontSize: 30,
            textAlign: "center",
            color: "#0265FC",
          }}
        >
          Smartech Electronics
        </Text>
      </View>

      <View style={{ marginTop: 40, marginLeft: 30 }}>
        <Text style={{ fontSize: 14 }}> Add Employees</Text>
        <View>
          <TextInput
            style={{
              marginTop: 15,
              width: 333,
              height: 50,
              borderRadius: 30,
              backgroundColor: "#D9D9D9",
              padding: 10,
              opacity: 0.5,
              color: "black",
            }}
            placeholder="Enter the name of your employee"
            placeholderTextColor="#5B5858"
          />
        </View>
        <View>
          <TextInput
            style={{
              marginTop: 15,
              width: 333,
              height: 50,
              borderRadius: 30,
              backgroundColor: "#D9D9D9",
              padding: 10,
              opacity: 0.5,
              color: "black",
            }}
            placeholder="Enter his/her contact number"
            placeholderTextColor="#5B5858"
          />
        </View>
        <Pressable
          style={{
            marginTop: 20,
            width: 333,
            height: 45,
            borderRadius: 30,
            backgroundColor: "#0265FC",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Add new employee
          </Text>
        </Pressable>
      </View>
      {/* line */}
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            marginTop: 30,
            marginLeft: 25,
            marginRight: 10,
            borderBottomColor: "#c4c4c4",
            borderBottomWidth: 1,
            width: "25%",
          }}
        ></View>
        <Text
          style={{
            color: "#c4c4c4",
            marginTop: 50,
            fontSize: 11,
          }}
        >
          or add from Contacts
        </Text>
        <View
          style={{
            marginLeft: 6,
            marginTop: 30,
            marginRight: 25,
            borderBottomColor: "#c4c4c4",
            borderBottomWidth: 1,
            width: "25%",
          }}
        ></View>
      </View>
      <View
        style={{
          fontFamily: "Helvetica",
          marginTop: 15,
          marginLeft: 30,
          marginRight: 30,
        }}
      >
        <View>
          <TextInput
            style={{
              marginTop: 15,
              width: 333,
              height: 50,
              borderRadius: 30,
              backgroundColor: "#D9D9D9",
              padding: 10,
              opacity: 0.5,
              color: "black",
            }}
            placeholder="Select from Contacts"
            placeholderTextColor="#5B5858"
          />
        </View>
        <Pressable
          style={{
            marginTop: 20,
            width: 333,
            height: 45,
            borderRadius: 30,
            backgroundColor: "#0265FC",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Add New Employee
          </Text>
        </Pressable>
      </View>

      <View
        style={{ flexDirection: "row", width: "100%", paddingHorizontal: 40 }}
      >
        <Pressable
          onPress={() => navigation.navigate("WelcomeScreen")}
          style={{
            marginTop: 60,
            backgroundColor: "#E1E1E1",
            borderRadius: 55 / 2,
            width: 55,
            height: 55,
            alignSelf: "flex-start",
            justifyContent: "center",
          }}
        >
          <FontAwesome5Icon
            name="arrow-left"
            size={25}
            color="white"
            style={{
              alignSelf: "center",
              fontWeight: "500",
            }}
          />
        </Pressable>

        {/* 
          circles */}
        <View
          style={{
            marginLeft: 0,

            flex: 1,
            width: 80,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 70,
          }}
        >
          <View
            style={{
              marginTop: 2,
              backgroundColor: "#0265FC",
              opacity: 0.6,
              marginHorizontal: 3,
              borderRadius: 12 / 2,
              width: 12,
              height: 12,
            }}
          ></View>

          <View
            style={{
              marginTop: 2.1,
              backgroundColor: "#0265FC",
              borderRadius: 12 / 2,
              marginHorizontal: 3,
              opacity: 0.6,
              width: 12,
              height: 12,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#0265FC",
              borderRadius: 14 / 2,
              marginHorizontal: 3,

              width: 14,
              height: 14,
            }}
          ></View>
        </View>
        <Pressable
          onPress={() => navigation.navigate("HomeScreen")}
          style={{
            marginTop: 60,
            backgroundColor: "#0265FC",
            borderRadius: 55 / 2,
            width: 55,
            height: 55,
            alignSelf: "flex-end",
            justifyContent: "center",
          }}
        >
          <FontAwesome5Icon
            name="arrow-right"
            size={25}
            color="white"
            style={{
              alignSelf: "center",
            }}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
