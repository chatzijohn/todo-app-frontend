"use client"
import { Box } from "@mui/material"
// import TodoForm from "@/app/components/TodoForm"
import TodoList from "@/app/components/TodoList"
// import TodoCounter from "@/app/components/TodoCounter"
import { useGetAllTasksQuery } from "@/lib/redux/api/taskApi"

export default function Todo() {
  // Use the useGetAllTasksQuery hook to fetch task data
  const { data: taskData, error, isLoading } = useGetAllTasksQuery();

  if (isLoading) {
    // Handle loading state
    return <div>Loading...</div>;
  }

  if (error) {
    // Handle error state
    return <div>Error: {error.message}</div>;
  }

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
        {/* <TodoCounter />
        <TodoForm /> */}
        <TodoList taskArr={taskData.tasks} />
      </Box>
    </>
  )
}
