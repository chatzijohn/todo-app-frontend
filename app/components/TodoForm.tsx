import { TextField, Button, Box } from "@mui/material";
import { useForm } from "react-hook-form"

export default function TodoForm({setTodoArr, todoArr}) {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isDirty, isValid },
        reset,
      } = useForm({ mode: "onChange" });

    const onSubmit = (todoTask) => {
        setTodoArr([...todoArr, {id: crypto.randomUUID(),title: todoTask.todoTask ,completed: false}])
        reset()
       }

    return (
        <Box
            direction="column"
            alignItems="center"
        >

            <form 
            onSubmit={handleSubmit(onSubmit)}
            >
            <TextField 
                {...register("todoTask", {required: true, minLength: 2, maxLength: 30})}
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