import React from 'react';
import TodoDetailCard from './TodoDetailCard';
import TodoStore from '../../../store/TodoStore';
import TodoModal from './TodoModal';
import NewTodo from './NewTodo';
import { observer } from 'mobx-react';
import { Grid } from '@mui/material';

function TodoList() {
    const todoStore = TodoStore;
  console.log("####", todoStore.todos);

  return (
    <>
        <NewTodo />

        <br/>
        <Grid container spacing={3} >
        {todoStore.todos.map((todo) => (
            <Grid key={todo.id} item xs={12}>
            <TodoDetailCard todo={todo}  />
            </Grid>
        ))}
        </Grid> 
        <TodoModal/>

    </>
  );
}

export default observer(TodoList);