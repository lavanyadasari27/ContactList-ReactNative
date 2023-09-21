import React from 'react';
import {render, screen} from '@testing-library/react-native';
import App from '../App';

test('renders contact list', () => {
  render(<App />);
  const header = screen.getByText('Contact List');
  expect(header).toBeTruthy();
});
