import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Task } from '@/lib/models/taskModel'

export const taskApi = createApi({
  reducerPath: "taskApi",
  // baseUrl: 'http://192.168.1.135:5050/api'
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5050/api/' }),
  endpoints: (builder) => ({
    // Get All tasks, an Array of Tasks
    getAllTasks: builder.query<Array<Task>, void>({
      query: () => ({
        url: 'tasks',
        method: 'GET',
      }),
    }),

    // Get a single task
    getTask: builder.query<Task, number>({
      query: (taskId) => ({
        url: `tasks/${taskId}`,
        method: 'GET',
      }),
    }),

    // Add a new task
    addTask: builder.mutation<Task, Partial<Task>>({
      query: (title) => ({
        url: 'tasks',
        method: 'POST',
        body: { title },
      }),
    }),

    // Delete a task
    deleteTask: builder.mutation<{ success: boolean, id: number }, number>({
      query: (id) => ({
        url: `tasks/${id}`,
        method: 'DELETE',
      }),
    }),

    // Update a task
    updateTask: builder.mutation<Task, Partial<Task>>({
      query: ({ id, title, completed }) => ({
        url: `tasks/${id}`,
        method: 'PUT',
        body: { title, completed },
      }),
    }),
  }),
})

export const {
  useGetAllTasksQuery,
  useGetTaskQuery,
  useAddTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} = taskApi
