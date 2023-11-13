import React from 'react';
import { useState } from 'react';
import './App.css';
import { Card, Input, Button, List} from 'antd';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if(todo !== ""){
      setTodos([...todos, todo]);
      setTodo("");
    }
  }
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };
  return (
    <Card
      id='card'
      title="To Do List"
      bordered="false"
      style={{
        width: 400,
      }}
    >
      <div class="wrapper">
        <Input 
          defaultValue="Combine input and button" 
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          />
        <Button className='btn' type="primary" onClick={addTodo}>Submit</Button>
      </div>
      <List
        dataSource={todos}
        renderItem={(item) => (
          <List.Item>
              <p>{item}</p>
              <Button className='delete-button' onClick={() => {deleteTodo(item);}}>Delete</Button>
          </List.Item>
        )}
      />
    </Card>
  );
}

export default App;
