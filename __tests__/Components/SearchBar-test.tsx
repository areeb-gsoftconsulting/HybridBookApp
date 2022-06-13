import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import SearchBar from '../../src/components/SearchBar';

describe('Component testing',()=>{
    test('Snapshot', () => {
      const tree = render(<SearchBar />);
      expect(tree).toMatchSnapshot();
    });

    test('search action', () => {
      const {getByTestId} = render(<SearchBar />);
      fireEvent.press(getByTestId('searchBookies'));
    });
    test('search input change', () => {
      const {getByTestId} = render(<SearchBar />);
      // fireEvent.press(getByTestId('search'));
      fireEvent.changeText(getByTestId('searchInput'));
    });
});
