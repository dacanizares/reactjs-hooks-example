import React from 'react';
import { useState, useEffect } from 'react';
import User from './User';
import UsersApi from '../api/UsersApi';

function Users() {
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
      <div className='row'>
        {users.map((user, index) => <User user={user} key={index} />) }      
      </div>
      
      <div className='row mt-3'>
        <div className='col-xs-12'>
          <a href='#'
            className='btn btn-primary btn-lg' 
            onClick={() => fetchUsers()} >
            Update
          </a>
        </div>
      </div>
    </div>
  );
}

export default Users;