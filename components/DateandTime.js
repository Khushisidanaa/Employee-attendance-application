import { Pressable, StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DatePicker from "react-native-date-picker";

const DateandTime = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  //const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  {
    /*const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
      const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
      };*/
  }

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 25,
      }}
    >
      <View>
        <Text>Task Date:</Text>
        <Pressable
          style={{
            marginTop: 4,
            height: 50,
            width: 140,
            backgroundColor: "white",
            borderRadius: 10,
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#0265FC",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            25/05/2022
          </Text>
        </Pressable>
      </View>

      <View>
        <Text>Starting Time:</Text>
        <Pressable
          style={{
            marginTop: 4,
            height: 50,
            width: 140,
            backgroundColor: "white",
            borderRadius: 10,
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#0265FC",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            09:00 am
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DateandTime;

const styles = StyleSheet.create({});
