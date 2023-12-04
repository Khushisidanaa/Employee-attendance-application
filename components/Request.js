import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Request = (props) => {
  const request = props.request;
  return (
    //main view
    <View style={{}}>
      {/* container view */}
      <View
        style={{
          marginTop: 50,
          marginLeft: 0,
          padding: 15,
          width: 340,
          height: 150,
          borderRadius: 15,
          backgroundColor: "white",
        }}
      >
        {/* pending view */}
        <View
          style={{
            height: 20,
            width: 70,
            borderRadius: 12,
            backgroundColor: "#FBBC04",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 10,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Pending
          </Text>
        </View>

        {/* request */}
        <View
          style={{
            marginTop: 16,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            {request.request}
          </Text>
        </View>

        {/* date view */}
        <View
          style={{
            marginTop: 3,
          }}
        >
          <Text
            style={{
              color: "#8E8E93",
              fontSize: 12,
              fontWeight: "400",
            }}
          >
            {request.date}
          </Text>
        </View>

        {/* by, approve, cancel view */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 25,
          }}
        >
          {/*by view */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                color: "#000000",
              }}
            >
              By
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                color: "#0265FC",
              }}
            >
              {request.person}
            </Text>
          </View>

          {/*button view*/}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {/*approve*/}
            <Pressable
              style={{
                height: 30,
                width: 80,
                borderRadius: 5,
                backgroundColor: "#0265FC",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Approve
              </Text>
            </Pressable>
            {/*cancel*/}
            <Pressable
              style={{
                height: 30,
                width: 80,
                borderRadius: 5,
                backgroundColor: "#C4C4C4",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Cancel
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Request;

const styles = StyleSheet.create({});
