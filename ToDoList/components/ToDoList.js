import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({ toDos }) => {

  const [toDoList, setToDos] = useState(toDos.map((task) => ({ id: uuidv4(), title: task })));

  const addToDo = (newTitle) => {
    const newToDo = { id: uuidv4(), title: newTitle };
    setToDos((prevToDos) => [...prevToDos, newToDo]);
  }

  const removeToDo = (id) => {
    setToDos(toDoList.filter((toDo) => toDo.id !== id));
  }

  return (
    <View style={styles.todoListContainer}>
      {toDoList.map((toDo) => (
        <View key={toDo.id}>
          <Text style={styles.todoItem}>{toDo.title}</Text>
          <Button title="Remove" onPress={() => removeToDo(toDo.id)} />
        </View>
      ))}
      <AddTask onAddTask={addToDo} />
    </View>
  );
}

ToDoList.defaultProps = {
  toDos: [],
};

const styles = StyleSheet.create({
  todoListContainer: {
    margin: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default ToDoList;