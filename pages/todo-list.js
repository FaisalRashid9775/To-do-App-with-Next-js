"use Client"


import { useState } from "react";
import { Box, Button, HStack , Text, VStack, Input } from "@chakra-ui/react";


export default function TodoList() {
  const [todos, settodos] = useState("");
  const [todoData, settodoData] = useState([
    { todo: "Learn HTML", Complete: false },
    { todo: "Learn CSS", Complete: true },
    { todo: "Learn NEXT-JS", Complete: true },
  ]);
  
 
  
  const onClickHandler = (elm) => {
    const newtodo = todoData.map((todos) => {
      if (todos.todo == elm.todo) {
        todos.Complete = !todos.Complete;
      }

      return todos;
    });
    settodoData(newtodo);
  };
  const addtodo = () => {
    const addnewtodo = { todo: todos, Complete: false };
    
    const addnewtodos = [...todoData, addnewtodo];
    console.log(addnewtodos)
    settodoData(addnewtodos)
    settodos("")
  };  
  const deleteTodo = (elm) => {
    const newTodos = todoData.filter((todo) => {
      if (todo.todo == elm.todo) return false;
      return true;
    });
    
    settodoData(newTodos);
  };
  return (
    <>
    <Box m={'auto'} pb={'40px'} pt={'40px'} w={'500px'} h={'-webkit-fit-content'}>

    <VStack spacing={'20px'} m={'auto'} pb={'40px'}>

        <Input
        color={'white'}
        size={'lg'}
        w={'350px'}
          placeholder="Add new todo" 
          value={todos}
          onChange={(e) => {
            settodos(e.target.value);
          }}
          
        />
          <Button w={'350px'} colorScheme={'purple'} size={'lg'} onClick={addtodo}> Add</Button>
    </VStack>
      

      
      <div>
        <ul>
          {todoData.map((elm) => (
            <li
              key={elm.todo}
              style={{
                listStyle: "none",
                color: elm.Complete ? "green" : "red",
              }}
            >
              
              <HStack spacing={'10px'} pt={'16px'} pl={'75px'}>
              <input
                type="checkbox"
                checked={elm.Complete}
                onChange={() => {
                  onClickHandler(elm);
                }}
              ></input>
              <Text fontSize={'18px'}>
              {elm.todo}
              </Text>
                
              {'   '}
              <Button colorScheme={'purple'} size='lg' h={'30px'} w={'70px'} onClick={()=>{deleteTodo(elm)}} style={{background : '' , color:'white'}}>Delete</Button>

              </HStack>
            </li>
          ))}
        </ul>
      </div>
      </Box>
    </>
  );
}



