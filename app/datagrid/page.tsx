'use client'
import React from 'react'
import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import TitleHeading from '@/app/components/TitleHeading'


const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
]

const rows = [
    { id: 1, lastName: 'Kyrikos', firstName: 'ΦΘΜ', age: 36 },
    { id: 2, lastName: 'Papakostantinou', firstName: 'Konstantinos', age: 28 },
    { id: 3, lastName: 'Demetriou', firstName: 'Elias', age: 26 },
    { id: 4, lastName: 'Wagdy', firstName: 'Nady', age: 25 },
    { id: 5, lastName: 'Chatzigiannis', firstName: 'Panagiotis', age: 24 },
]

export default function DataGridPage() {

    return(
        <>
            <TitleHeading title="Technor Traitors" height="50vh" subTitle={''}/>
            <Box
                sx = {{
                  height: "50vh",
                  flexGrow: 1,
                }}
            >
                <DataGrid
                    rows={rows}
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