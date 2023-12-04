import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Tasks from "../screens/Tasks";
import Entypo from "react-native-vector-icons/Entypo";

const TaskList = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      {/* task and icon*/}
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
            Tasks
          </Text>
          <Text>5 requests pending</Text>
        </View>
        <Ionicons
          style={{ marginTop: 10 }}
          name="notifications-outline"
          size={22}
        />
      </View>

      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 15,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Pending Tasks
          </Text>
          <Ionicons name="filter" size={25} />
        </View>
        <View
          style={{
            marginTop: 15,
            marginLeft: 4,
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

        <View
          style={{
            marginTop: 30,
            marginLeft: 4,
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
              backgroundColor: "#117A48",
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
              Secondary
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
              Degugging Errors
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
              The TechHouse
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

        <Text
          style={{
            paddingLeft: 15,
            marginTop: 35,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Completed Tasks
        </Text>

        <View
          style={{
            marginTop: 10,
            marginLeft: 4,
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
              The TechHouse
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

        <TouchableOpacity
          onPress={() => navigation.navigate("AddTask")}
          style={{
            height: 40,
            width: 40,
            backgroundColor: "#0265FC",
            borderRadius: 50,
            marginTop: 5,
            left: 325,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Entypo
            name="plus"
            size={20}
            style={{
              color: "white",
            }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    height: 670,
    backgroundColor: "#F3F3F3",
    paddingLeft: 25,
    borderRadius: 30,
  },
});
