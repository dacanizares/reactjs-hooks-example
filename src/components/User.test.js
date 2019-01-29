import React from 'react';
import User from './User';
import renderer from 'react-test-renderer';

jest.mock('./Card', () => 'Card');

it('renders correctly', () => {
  const user = {
    email: 'email@test.com', 
    name: {
      title: 'mr',
      first: 'name'
    },
    picture: {
      large: 'image here'
    }
  }

  const tree = renderer
    .create(<User user={user} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});