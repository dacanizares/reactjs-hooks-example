import React from 'react';
import Card from './Card';

const Users = ({usersList, fetchUsers}) =>  {   
  return (
    <div>
      <div className='row'>
        <div className='card-deck'>
          {usersList.map((user, index) => 
              <Card text={user.email} title={`${user.name.title} ${user.name.last}`} imageUrl={user.picture.large} index={index} />    
          )}      
        </div>
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