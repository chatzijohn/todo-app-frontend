import { Task } from "@/lib/models/taskModel";
import { useAddTaskMutation, useGetAllTasksQuery } from "@/lib/redux/api/taskApi";
import { TextField, Button, Box } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form"

export default function TodoForm() {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isDirty, isValid },
        reset,
    } = useForm({ mode: "onChange" });
    
    const [addTask, { data, isSuccess }] = useAddTaskMutation()

    const { refetch: refetchTasks } = useGetAllTasksQuery()
    
    const onSubmit = (task: Partial<Task>) => {
        addTask(task)
        reset()
    }

    useEffect(() => {
        // You can refetch data here based on a condition
        refetchTasks()
      }, [isSuccess])
    
    return (
        <Box
            sx={{
                direction: "column",
                alignItems: "center"
            }}
        >

            <form 
                onSubmit={handleSubmit(onSubmit)}
            >
                <TextField 
                    {...register("title", {required: true, minLength: 2, maxLength: 30})}
                    id="standard-basic" 
                    label="New Todo Task" 
                    variant="outlined"
                />
                <Button
                    disabled={!isDirty || !isValid}
                    color="primary"
                    variant="contained"
                    type="submit"
                    sx={{ height: "100%" }}
                >+</Button>
            </form>
        </Box>
    )
}