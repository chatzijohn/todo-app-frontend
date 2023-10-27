import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todoApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.135:5050/api' }),
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => ({
        url: 'tasks', // Adjust the URL as per your API
        method: 'GET',
      }),
    }),

    getTodo: builder.query({
      query: (todoId) => ({
        url: `tasks/${todoId}`, // Adjust the URL as per your API
        method: 'GET',
      }),
    }),

    // Add a new todo
    addTodo: builder.mutation({
      query: (newTitle) => ({
        url: 'tasks', // Adjust the URL as per your API
        method: 'POST',
        body: { title: newTitle },
      }),
    }),

    // Delete a todo
    deleteTodo: builder.mutation({
      query: (todoId) => ({
        url: `tasks/${todoId}`,
        method: 'DELETE',
      }),
    }),

    // Update a todo
    updateTodo: builder.mutation({
      query: ({ todoId, newTitle, newCompleted }) => ({
        url: `tasks/${todoId}`,
        method: 'PUT',
        body: {
          title: newTitle,
          completed: newCompleted,
        },
      }),
    }),
  }),
})

export const {
  useGetAllTodosQuery,
  useGetTodoQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = todoApi

export default todoApi
