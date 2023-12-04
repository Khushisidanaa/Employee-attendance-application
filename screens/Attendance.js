import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Request from "../components/Request";
import request from "../assets/data/request";

const Attendance = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      {/* request and icon*/}
      <View
        style={{
          padding: 30,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 28,
            }}
          >
            Requests
          </Text>
          <Text>10 requests pending</Text>
        </View>
        <Ionicons
          style={{ marginTop: 10 }}
          name="notifications-outline"
          size={22}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={request}
          renderItem={({ item }) => <Request request={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Attendance;

const styles = StyleSheet.create({
  container: {
    height: 670,
    backgroundColor: "#F3F3F3",
    paddingLeft: 25,
    borderRadius: 30,
  },
});
