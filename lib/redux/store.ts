import { configureStore } from '@reduxjs/toolkit'
import { taskApi } from '@/lib/redux/api/taskApi'

const store = configureStore({
    reducer: {
      [taskApi.reducerPath]: taskApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(taskApi.middleware),
    devTools: true,
})

export default store