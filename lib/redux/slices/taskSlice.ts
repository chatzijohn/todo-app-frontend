import { createSlice } from "@reduxjs/toolkit"

const taskSlice = createSlice({
    name: `taskSlice`,
    initialState: {
        data: null,
    },

    reducers: {
        setTodoData: (state, action) => {
            state.data = action.payload
        },
    },
})

export const { setTodoData } = taskSlice.actions

export default taskSlice.reducer