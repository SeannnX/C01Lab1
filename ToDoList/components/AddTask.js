import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTask = ({ onAddTask }) => {

  const [title, setTitle] = useState('');

  const handleAddTask = () => {
    if (title.trim() !== '') {
      onAddTask(title);
      setTitle('');
    }
  };

  return (
    <View style={styles.todoListContainer}>
      <TextInput
        style={styles.todoItem}
        placeholder="Enter a new task"
        onChangeText={(text) => setTitle(text)}
        value={title}
        returnKeyType="done"
      />
      <Button title="add a new task" onPress={handleAddTask} />
    </View>
  );
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

export default AddTask;