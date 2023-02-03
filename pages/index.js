import Head from "next/head";
import NewToDo from "./Add-new-Todo";
import Todo from "./todo-list";
import { ChakraProvider, Heading, Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>To do App</title>
      </Head>

      <div>
        <ChakraProvider>
          <Box w={'600px'} h={'-moz-max-content'} bg={'blackAlpha.800'} margin='auto' mt={'120px'} borderRadius='20px'>

          <Heading fontFamily={'sans-serif'} fontSize={'54px'} fontWeight={100}  textAlign={'center'} p={'40px'} color={'white'}>Todo App</Heading>
        <Todo />
          </Box>

        </ChakraProvider>
        

      </div>
    </>
  )

}
