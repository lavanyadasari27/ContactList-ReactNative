import React from 'react';
import {render, screen} from '@testing-library/react-native';
import App from '../App';

test('renders contact list', () => {
  render(<App />);
  const header = screen.getByText('Contact List');
  expect(header).toBeTruthy();
});

test('renders at least one contact name', () => {
  render(<App />);
  const contactName = screen.getByText('Kathryn Murphy');
  expect(contactName).toBeTruthy();
});