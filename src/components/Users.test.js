import React from 'react';
import Users from './Users';
import renderer from 'react-test-renderer';

jest.mock('../api/UsersApi');

it('renders correctly', () => {
  const tree = render(<Users />).toJSON();
  expect(tree).toMatchSnapshot();
});