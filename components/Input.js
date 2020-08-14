import React, { useState } from "react";
import { TextInput, Button, View, StyleSheet } from "react-native";

const Input = (props) => {
  const [task, setTask] = useState("");

  const taskInputHandler = (enteredTask) => {
    setTask(enteredTask);
  };

  const addTaskHandler = () => {
    props.onAddTask(task);
    setTask("");
  };

  return (
    <View style={styles.screen}>
      <TextInput
        placeholder="Add new task"
        style={styles.input}
        onChangeText={taskInputHandler}
        value={task}
      />
      <Button title="ADD" onPress={addTaskHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 15,
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});
export default Input;
