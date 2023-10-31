import { Box } from "@mui/material"
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { Task } from '@/lib/models/taskModel'
import { useDeleteTaskMutation, useUpdateTaskMutation, useGetAllTasksQuery } from '@/lib/redux/api/taskApi'

export default function TodoList({ taskArr }: { taskArr: Array<Task> }) {
  const [deleteTask, deleteResponse] = useDeleteTaskMutation()
  const [updateTask, updateResponse] = useUpdateTaskMutation()

  const { refetch: refetchTasks } = useGetAllTasksQuery()

  const handleDeleteTask = async (taskId: number) => {
    await deleteTask(taskId)
    // After the delete mutation, refetch the tasks data
    refetchTasks()
  }

  const handleUpdateTask = async (task: Task) => {
    await updateTask({ id: task.id, completed: !task.completed })
    // After the update mutation, refetch the tasks data
    refetchTasks()
  }

  const sortedTaskArr = taskArr.slice().sort((a, b) => {
    return a.id - b.id
  })
  return (
    <Box
      sx={{
        direction: "column",
        alignItems: "center"
      }}
    >
      <List>
        {sortedTaskArr.length === 0 && <Typography variant="h6">You have no tasks.</Typography>}
        {sortedTaskArr.map((task) => {
          return (
            <ListItem
              sx={{ minWidth: "300px" }}
              secondaryAction={
                <IconButton edge="end" onClick={() => handleDeleteTask(task.id)}>
                  <DeleteIcon />
                </IconButton>
              }
              key={task.id}
              disablePadding
            >
              <ListItemButton onClick={() => handleUpdateTask(task)}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={task.completed}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText primary={task.title} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}
