import React from 'react';
import { useState, useEffect } from 'react';
import UsersApi from '../api/UsersApi';
import Users from './Users';

function UsersComponent() {
  const [users, setUsers] = useState([]);
  const usersApi = new UsersApi();

  function fetchUsers() {
    usersApi.find().then(response => setUsers(response));
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
     <Users usersList={users} fetchUsers={fetchUsers} />
    </div>
  );
}

export default UsersComponent;