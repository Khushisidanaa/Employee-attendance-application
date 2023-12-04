import {
  Image,
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
} from "react-native";
import React from "react";
import WelcomeScreen from "./WelcomeScreen";

const LandingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View
        style={{
          paddingTop: 70,
          paddingLeft: 30,
          paddingRight: 15,
          fontFamily: "Helvetica",
        }}
      >
        <Text style={{ fontSize: 20, marginTop: 20 }}>
          Make tracking attendance and keeping account of workspace jobs a{" "}
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
              color: "#0265FC",
              textAlign: "left",
            }}
          >
            hundred{"  "}
          </Text>
          times easier with{" "}
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "#0265FC",
            marginTop: 10,
          }}
        >
          {" "}
          m-Track !
        </Text>
      </View>

      <Image
        style={{
          height: 218,
          width: 328,
          alignContent: "center",
          marginLeft: 20,
        }}
        source={require("../assets/images/landing.png")}
      />

      <Text
        style={{
          textAlign: "center",
          marginHorizontal: 30,
          fontSize: 18,
          marginTop: 30,
        }}
      >
        Add your company or login as an employee to get started on the exciting
        journey !!
      </Text>

      {/* button - DONE */}

      <Pressable
        onPress={() => navigation.navigate("WelcomeScreen")}
        style={{
          backgroundColor: "#0265FC",
          color: "#FFFFFFF",
          borderRadius: 20,
          padding: 5,
          marginHorizontal: 30,
          marginTop: 40,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            paddingVertical: 10,
            fontWeight: "800",
          }}
        >
          Get Started
        </Text>
      </Pressable>

      {/* 3 dots and an icon  */}
      <View
        style={{
          width: 80,
          alignSelf: "center",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: 80,
        }}
      >
        <View
          style={{
            backgroundColor: "#0265FC",

            marginHorizontal: 3,
            borderRadius: 14 / 2,
            width: 14,
            height: 14,
          }}
        ></View>
        <View
          style={{
            marginTop: 2,
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
            marginTop: 2.1,
            backgroundColor: "#0265FC",
            borderRadius: 12 / 2,
            marginHorizontal: 3,
            opacity: 0.6,
            width: 12,
            height: 12,
          }}
        ></View>
      </View>
    </SafeAreaView>
  );
};

export default LandingScreen;
