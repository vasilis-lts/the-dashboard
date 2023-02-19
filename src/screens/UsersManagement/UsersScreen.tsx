import { Columns, User } from '../../types';
import UsersTable from './UsersTable';
import React, { useEffect, useState } from 'react'
import { createColumnHelper } from '@tanstack/react-table'
import { Button, Box, Typography } from '@mui/material';
import ScreenContainer from '../../components/ScreenContainer';

const users: User[] = [
  {
    username: "VasilisLitsas",
    age: 25,
    address: {
      country: "GR",
      city: "Athens"
    }
  },
  {
    username: "ThomasKolliopoulos",
    age: 37,
    address: {
      country: "GR",
      city: "Greece"
    }
  }
];

const columnHelper = createColumnHelper<User & Columns>();

function UsersManagement() {
  const [UsersData, setUsersData] = useState<User[]>([]);
  const [columns, setColumns] = useState<any>([]);

  useEffect(() => {
    getUsers();

    return () => {
      //
    }
  }, [])

  const getUsers = () => {
    setUsersData(users);
    createColumns();
  }

  const createColumns = () => {
    setColumns([
      columnHelper.accessor('username', {
        header: () => <span>Username</span>,
        cell: info => info.getValue(),
        // footer: info => info.column.id,
      }),
      columnHelper.accessor('age', {
        header: () => <span>Age</span>,
        cell: info => info.getValue(),
        // footer: info => info.column.id,
      }),
      columnHelper.accessor(row => row.actions, {
        id: "actions",
        header: () => <span></span>,
        cell: row => <Box className="flex">
          <Button color='info' variant='contained' onClick={() => handleIncrementAge(row.row)}>Increment age</Button>
          <Button sx={{ ml: 1 }} color='error' variant='outlined' onClick={() => deleteEntry(row.row.original)}>Delete</Button>
        </Box>
        // footer: info => info.column.id,
      }),
    ])
  }

  const addItem = () => {
    setUsersData( // Replace the state 
      prevUsers =>
        [ // with a new array
          ...prevUsers, // that contains all the old items
          {
            username: 'Yannis', age: 34, address: { country: "GR", city: "Piraeus" }
          } // and one new item at the end
        ]
    );
  }

  const deleteEntry = (row: any) => {
    setUsersData(prevUsers => prevUsers.filter(user => user.username !== row.username)
    );
  }

  function handleIncrementAge(row: any) {
    setUsersData(prevUsers => prevUsers.map(user => {
      if (user.username === row.original.username) {
        // Create a *new* object with changes
        return { ...user, age: row.original.age + 1 };
      } else {
        // No changes
        return user;
      }
    }));
  }

  return (
    <ScreenContainer>
      <Typography variant='h4' sx={{ mt: 1 }} className='flex1' gutterBottom><b>Users management</b></Typography>
      <Box sx={{ mt: 3 }}>
        <Button variant='contained' onClick={addItem}>Add user</Button>
        {UsersData.length && columns.length ?
          <Box sx={{ mt: 1 }}>
            <UsersTable data={UsersData} columns={columns} />
          </Box>
          : null}
      </Box>
    </ScreenContainer>
  )
}

export default UsersManagement