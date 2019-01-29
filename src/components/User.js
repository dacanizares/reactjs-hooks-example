import React from 'react';
import Card from './Card';

const User = ({user}) =>  {   
    return (
        <div className='card-deck'>
            <Card text={user.email} title={`${user.name.title} ${user.name.last}`} imageUrl={user.picture.large} />    
        </div>
    );
}

export default User;