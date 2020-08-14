import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Input from "./components/Input";
import Tasks from "./components/Tasks";
export default function App() {
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(0);

  const addTaskHandler = (newTask) => {
    if (newTask.length === 0) return;
    setTasks((currentTask) => [
      ...currentTask,
      { key: id.toString(), value: newTask },
    ]);
    setId((currentValue) => currentValue + 1);
  };

  const deleteTaskHandler = (taskId) => {
    setTasks((currentTask) => {
      return currentTask.filter((task) => task.key !== taskId);
    });
  };

  return (
    <View style={styles.container}>
      <Input onAddTask={addTaskHandler} />
      <FlatList
        data={tasks}
        renderItem={(itemData) => (
          <Tasks
            data={itemData.item.value}
            onDelete={deleteTaskHandler}
            id={itemData.item.key}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginVertical: 35,
    alignContent: "center",
  },
});
