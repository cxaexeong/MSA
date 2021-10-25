import React from 'react';
import { observer } from 'mobx-react';
import { Button, Form } from 'semantic-ui-react'
import TodoStore from '../../../store/TodoStore';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

function NewTodo() {
  const ts = TodoStore;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();

    // const uid = ; userstore에서 받아오기 
    return (
        <div>
        <Form>
            <Form.Group >
            <Form.Field>
                <label>시작일</label>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => {setStartDate(date);ts.setStartDate(date)}}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat='yyyy-MM-dd'
                /> 
            </Form.Field>
            <Form.Field>
                <label>마지막일</label>
                <DatePicker
                selected={endDate}
                onChange={(date) => {setEndDate(date);ts.setEndDate(date)}}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                dateFormat='yyyy-MM-dd'
            />
            </Form.Field>
        
            <Form.Field label='일정' control='input'  
            value={ts.title} onChange={(e)=>ts.setTitle(e.target.value)}
            style={{minWidth:"40em"}}/>
            </Form.Group>
            
            <Form.Field label='내용' control='textarea' rows='3' 
            value={ts.contents} onChange={(e)=>ts.setContents(e.target.value)}
            />
            <Button
            floated='right'
            content="추가"
            labelPosition='right'
            icon='checkmark'
            onClick={() => ts.todoCreate()}
            positive
            />
    </Form>
    </div>
    );
}

export default observer(NewTodo);