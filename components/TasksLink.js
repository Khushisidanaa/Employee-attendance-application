import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Tasks from "../screens/Tasks";

const TasksLink = ({ navigation }) => {
  return (
    // main view
    <View style={{}}>
      {/* pending task and filter */}

      {/* container view */}
      <View
        style={{
          marginTop: 30,
          marginLeft: 12,
          padding: 15,
          width: 340,
          height: 150,
          borderRadius: 15,
          backgroundColor: "white",
        }}
      >
        {/* urgency view */}
        <View
          style={{
            height: 20,
            width: 70,
            borderRadius: 12,
            backgroundColor: "#C61E1E",
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
            Urgent
          </Text>
        </View>

        {/* job */}
        <View
          style={{
            marginTop: 16,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Technical Trouble
          </Text>
          <Image
            source={{
              uri: "",
            }}
          />
        </View>
        {/* company name*/}
        <View>
          <Text
            style={{
              fontSize: 12,
            }}
          >
            Barksons and Co. Software
          </Text>
        </View>

        {/* date  time clockicon view */}
        <View
          style={{
            marginTop: 3,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#8E8E93",
              fontSize: 10,
              fontWeight: "400",
            }}
          >
            25/05/2022
          </Text>
          <EvilIcons
            style={{
              marginLeft: 5,
            }}
            name="clock"
            size={15}
          />

          <Text
            style={{
              color: "#8E8E93",
              fontSize: 10,
              fontWeight: "400",
              marginLeft: 5,
            }}
          >
            11:00 am
          </Text>
        </View>

        {/* person view */}
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              For
            </Text>
            <Text
              style={{
                marginLeft: 5,
                fontWeight: "bold",
                color: "#0265FC",
              }}
            >
              John Doe
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginRight: 15,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Tasks")}>
              <Feather name="edit" size={15} />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign
                style={{
                  marginLeft: 10,
                }}
                name="delete"
                size={15}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TasksLink;

const styles = StyleSheet.create({});
