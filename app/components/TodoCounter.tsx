import { Box, Typography } from "@mui/material"

export default function TodoCounter({ todoArr}) {

    const todoCompletedCount = todoArr.filter(todo => todo.completed == true).length
    const todoTotalCount = todoArr.length
    return (
        <Box 
            sx={{ m: 1, gap: 1, display: 'flex' , flexDirection: 'row' }}
        >
            <Typography>
                Total Tasks: {todoTotalCount}
            </Typography>
            <Typography>
                Completed Tasks: {todoCompletedCount}
            </Typography>
        </Box>
        )
    
}
