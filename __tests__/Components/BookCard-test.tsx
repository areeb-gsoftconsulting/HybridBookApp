import React from 'react';
import {fireEvent,render} from '@testing-library/react-native';
import BookCard from '../../src/components/BookCard';


describe('Component testing', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  test('should render books component', () => {
    const bookCard = render(<BookCard />).toJSON();
    expect(bookCard).toMatchSnapshot();
  });
});
