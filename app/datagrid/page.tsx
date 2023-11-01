'use client'
import React from 'react'
import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import TitleHeading from '@/app/components/TitleHeading'
import { useGetAllTasksQuery } from "@/lib/redux/api/taskApi"

const columns = [
    {
      field: 'title',
      headerName: 'Task Title',
      width: 250,
      editable: true,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 250,
      editable: false,
    },
]

export default function DataGridPage() {
  // Use the useGetAllTasksQuery hook to fetch task data
  const { data: taskData, error, isLoading } = useGetAllTasksQuery()

  if (isLoading) {
    // Handle loading state
    return <div>Loading...</div>;
  }

  if (error) {
    // Handle error state
    return <div>Error: {error.message}</div>;
  }

  return(
      <>
          <TitleHeading title="Todo Tasks" height="50vh" subTitle={''}/>
          <Box
              sx = {{
                height: "50vh",
                flexGrow: 1,
              }}
          >
              <DataGrid
                  rows={taskData.tasks}
                  columns={columns}
                  initialState={{
                      pagination: {
                        paginationModel: {
                          pageSize: 5,
                        },
                      },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
              />
          </Box>
      </>
  )
}