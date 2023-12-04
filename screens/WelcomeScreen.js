import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  SafeAreaView,
} from "react-native";
import AddEmployees from "./AddEmployees";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import LandingScreen from "./LandingScreen";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        paddingLeft: 30,
        paddingRight: 15,
        alignItems: "center",
        backgroundColor: "white",
        height: "100%",
        fontFamily: "Helvetica",
      }}
    >
      {/* image */}
      <Image
        style={{ marginTop: 60, height: 298, width: 298 }}
        source={require("../assets/images/welcome.png")}
      />

      {/* welcoem text */}
      <View>
        <Text style={{ color: "#0265FC", fontSize: 28, fontWeight: "bold" }}>
          Welcome to m-Track !!
        </Text>
      </View>

      {/* add your business text */}
      <View style={{ marginTop: 24 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 19,
            fontWeight: "bold",
            marginHorizontal: 20,
          }}
        >
          {`Add your business and lets get  started!! 🎊`}
        </Text>
      </View>

      {/*add your business 1.input, 2.button, 3.text*/}
      <View style={{ marginTop: 35 }}>
        <View>
          <TextInput
            style={{
              width: 333,
              height: 50,
              borderRadius: 30,
              backgroundColor: "#D9D9D9",
              padding: 10,
              opacity: 0.5,
              color: "black",
            }}
            placeholder="Enter the name of your business"
            placeholderTextColor="#5B5858"
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <Pressable
            onPress={() => navigation.navigate("AddEmployees")}
            style={{
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
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Add the business
            </Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: "row", marginTop: 15, marginLeft: 50 }}>
          <Text style={{ fontSize: 10 }}>
            Already an employee of a business?{" "}
          </Text>
          <Pressable>
            <Text style={{ color: "#0265FC", fontWeight: "600", fontSize: 10 }}>
              {" "}
              Login
            </Text>
          </Pressable>
        </View>
      </View>

      {/* mainsection */}
      <View
        style={{ flexDirection: "row", width: "100%", paddingHorizontal: 40 }}
      >
        <Pressable
          onPress={() => navigation.navigate("LandingScreen")}
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
              backgroundColor: "#0265FC",
              borderRadius: 14 / 2,
              marginHorizontal: 3,

              width: 14,
              height: 14,
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
        <Pressable
          onPress={() => navigation.navigate("AddEmployees")}
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
};

export default WelcomeScreen;
