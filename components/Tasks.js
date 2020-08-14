import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const Tasks = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>{props.data}</Text>
      <View style={styles.buttonWrapper}>
        <Button title="✓" style={styles.button} />
        <Button
          title="X"
          style={styles.button}
          onPress={props.onDelete.bind(this, props.id)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginVertical: 10,
    marginLeft: 15,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 80,
  },
  button: {
    width: 50,
  },
  text: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    width: 250,
    textAlignVertical: "center",
    paddingLeft: 5,
  },
});

export default Tasks;
