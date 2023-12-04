import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { DarkTheme } from "@react-navigation/native";
import DateandTime from "../components/DateandTime";

export default function Tasks() {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      {/* modify task and icon*/}
      <View
        style={{
          padding: 30,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "white",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 28,
          }}
        >
          Modify Task
        </Text>
        <Ionicons name="alarm" size={22} />
      </View>

      <View style={styles.container}>
        {/* SE text */}
        <View
          style={{
            marginTop: 30,
            alignItems: "center",
            marginLeft: -12,
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "#0265FC",
            }}
          >
            Smartech Electronics
          </Text>
        </View>

        <View style={{ paddingHorizontal: 15, paddingVertical: 25 }}>
          {/* name of the employee */}
          <View
            style={{
              height: 75,
            }}
          >
            <Text style={styles.text}>Name of Employee</Text>
            <View
              style={{
                marginTop: 10,
              }}
            >
              <TextInput
                placeholderTextColor="#000000"
                style={{
                  fontSize: 15,
                  fontWeight: "300",
                }}
                placeholder="Mr. John Doe"
              />
            </View>
            <View
              style={{
                marginTop: 4,
                marginRight: 25,
                borderBottomColor: "#0563F1",
                borderBottomWidth: 1,
                width: 300,
              }}
            ></View>
          </View>

          {/* task desc */}
          <View
            style={{
              height: 75,
            }}
          >
            <Text style={styles.text}>Task Description :</Text>
            <View
              style={{
                marginTop: 10,
              }}
            >
              <TextInput
                placeholderTextColor="#000000"
                style={{
                  fontSize: 15,
                  fontWeight: "300",
                }}
                placeholder="Debugging errors for Barkons and Co."
              />
            </View>
            <View
              style={{
                marginTop: 4,
                marginRight: 25,
                borderBottomColor: "#0563F1",
                borderBottomWidth: 1,
                width: 300,
              }}
            ></View>
          </View>

          {/* task location */}
          <View style={{}}>
            <Text style={styles.text}>Task location :</Text>
            <View
              style={{
                marginTop: 10,
              }}
            >
              <TextInput
                placeholderTextColor="#000000"
                style={{
                  fontSize: 15,
                  fontWeight: "300",
                }}
                placeholder="B/202, XYZ Building, Chembur, Mumbai-88"
              />
            </View>
            <View
              style={{
                marginTop: 4,
                marginRight: 25,
                borderBottomColor: "#0563F1",
                borderBottomWidth: 1,
                width: 300,
              }}
            ></View>
          </View>
        </View>

        {/* button */}
        <View
          style={{
            paddingLeft: 25,
            marginTop: 10,
          }}
        >
          <Pressable
            style={{
              flexDirection: "row",
              height: 50,
              width: 305,
              backgroundColor: "#0265FC",
              borderRadius: 10,
              padding: 10,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              View task location
            </Text>
            <AntDesign name="right" size={20} style={{ color: "white" }} />
          </Pressable>
        </View>

        <DateandTime />

        {/* button */}
        <View
          style={{
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              height: 50,
              width: 300,
              backgroundColor: "#0265FC",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Save the task
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 690,
    backgroundColor: "#F3F3F3",
    paddingLeft: 25,
    borderRadius: 30,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#094196",
  },
});
