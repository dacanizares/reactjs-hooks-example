import React from 'react'
import { useState, useEffect } from 'react'
import UsersApi from '../api/UsersApi'
import Users from './Users'

function UsersComponent() {
  const [users, setUsers] = useState([]);
  const usersApi = new UsersApi();

  async function fetchUsers() {
    var response = await usersApi.find();
    setUsers(response);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
     <Users usersList={users} fetchUsers={fetchUsers} />
    </>
  );
}

export default UsersComponent;