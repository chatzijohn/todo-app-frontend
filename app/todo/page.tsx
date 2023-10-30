"use client"
import { Box } from "@mui/material"
import TodoForm from "@/app/components/TodoForm"
import TodoList from "@/app/components/TodoList"
import TodoCounter from "@/app/components/TodoCounter"

export default function Todo() {
  return (
    <> 
      <Box
        sx={{
          display: 'flex',
          height: "80vh",
          width: "100vw",
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TodoCounter/>
        <TodoForm />
        <TodoList />
      </Box>
    </>
  )
}
