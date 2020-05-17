import React, { FC, useState } from 'react'
import { View, Text, Button } from 'react-native'

import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const Todo = ({}) => {
  const [formView, setFormView] = useState<boolean>(false);

  return (
    <View>
      {formView ? (
          <TodoForm switchView={setFormView} />
      ) : (
          <TodoList switchView={setFormView}/>
      )}
    </View>
  );
};

export default Todo