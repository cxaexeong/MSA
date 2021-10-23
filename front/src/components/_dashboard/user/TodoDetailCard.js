import React from 'react';
import { observer } from 'mobx-react';
import TodoStore from '../../../store/TodoStore';
import {  Grid, Box, Card, Typography, Stack } from '@mui/material';
import { Item, Button } from 'semantic-ui-react';

function TodoDetailCard({todo}) {
  const ts = TodoStore;

    return (
        <Card>
            <Grid container spacing={1}>
            <Grid item xs={6} sm={3}>
            <Stack  direction="row" spacing={2} sx={{ p: 3 }}>
                <Item>
                <Typography variant="h3" noWrap >
                    {todo.title}
                </Typography>
                </Item>
                <Item>
                <Typography variant="subtitle1" noWrap >
                    {todo.start_date}
                </Typography>
                <br/>
                <Typography variant="subtitle1" noWrap >
                    {todo.end_date}
                </Typography>
                </Item>
                <Item>
                <Typography variant="h4" noWrap >
                    {todo.contents}
                </Typography>
                </Item>
                <Item>
                <Button color='red' style={{minWidth:"5em"}} onClick={() => {ts.setModalOpen(true);ts.setTodo(todo);}}>
                수정
                </Button>
                <br/>
                <Button color='black' style={{minWidth:"5em"}} onClick={() => {ts.setTodo(todo);ts.deleteTodo()}}>
                삭제
                </Button>
            </Item>
            </Stack>
            </Grid>
            </Grid>
        </Card>
    );
}

export default observer(TodoDetailCard);