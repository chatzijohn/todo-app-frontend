import { configureStore } from '@reduxjs/toolkit'
import { taskApi } from '@/lib/redux/api/taskApi'

export const reduxStore = configureStore({
    reducer: {
      [taskApi.reducerPath]: taskApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(taskApi.middleware),
    devTools: true,
})

export type ReduxStore = typeof reduxStore