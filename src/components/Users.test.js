import React from 'react';
import Users from './Users';
import renderer from 'react-test-renderer';

jest.mock('./Card', () => 'Card');

it('renders correctly', () => {
  const fecth = () => { }

  const userList = [{
    email: 'email@test.com', 
    name: {
      title: 'mr',
      first: 'name'
    },
    picture: {
      large: 'image here'
    }
  }];

  const tree = renderer
    .create(<Users usersList={userList} fetchUsers={fecth} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});