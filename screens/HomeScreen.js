import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { React, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import SelectList from "react-native-dropdown-select-list";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";

//import SelectDropdown from "react-native-select-dropdown";
//import TasksLink from "../components/TasksLink";
//import task from "../assets/data/task";
//import SelectBox from 'react-native-multi-selectbox'

export default function HomeScreen({ navigation }) {
  const [selected, setSelected] = useState("");
  const data = [
    {
      id: "1",
      value: "Annually",
    },
    {
      id: "2",
      value: "Monthly",
    },
    {
      id: "3",
      value: "Weekly",
    },
  ];

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
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
            fontSize: 22,
          }}
        >
          Smartech Electronics
        </Text>
        <Ionicons name="notifications-outline" size={22} />
      </View>

      <View style={styles.container}>
        {/* Weclome text */}
        <View
          style={{
            marginTop: 30,
            marginLeft: 25,
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "#0265FC",
            }}
          >
            WELCOME !
          </Text>
          <View
            style={{
              marginTop: 25,
            }}
          >
            <Text>Calculate the attendance in the duration of:</Text>
          </View>
        </View>

        {/* drop down */}
        <View
          style={{
            marginRight: 25,
            marginLeft: 5,
            marginTop: 10,
          }}
        >
          {/*<SelectBox label="Select single"options={data} value={selected} hideInputFilter={false}/>*/}
          <SelectList
            data={data}
            setSelected={setSelected}
            boxStyles={{
              backgroundColor: "white",
              height: 50,
              alignItems: "center",
            }}
            inputStyles={{
              paddingLeft: 20,
              fontSize: 15,
            }}
            dropdownStyles={{
              backgroundColor: "white",
            }}
            dropdownItemStyles={{
              fontSize: 18,
              fontWeight: "bold",
            }}
            placeholder="eg. annually /monthy /weekly"
            maxHeight={150}
          />
        </View>

        {/* 4 buttons */}
        <View
          style={{
            marginLeft: -18,
            paddingHorizontal: 25,
            paddingVertical: 25,
          }}
        >
          {/*first 2 buttons*/}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Attendance")}
              style={{
                height: 55,
                width: 160,
                backgroundColor: "#0265FC",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.text}>View attendance</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 55,
                width: 160,
                backgroundColor: "#0265FC",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.text}>Add attendance</Text>
            </TouchableOpacity>
          </View>

          {/*next 2 buttons*/}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Tasklist")}
              style={{
                height: 55,
                width: 160,
                backgroundColor: "#0265FC",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.text}>View tasks</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("AddTask")}
              style={{
                height: 55,
                width: 160,
                backgroundColor: "#0265FC",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.text}>Add task</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginLeft: 25,
          }}
        >
          Upcoming Tasks
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            marginBottom: 20,
          }}
        >
          <View
            style={{
              marginTop: 15,
              marginLeft: 0,
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
                flexDirection: "row",
                justifyContent: "space-between",
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
              marginLeft: 0,
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
        </ScrollView>
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
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});
