/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import {render} from '@testing-library/react-native';
import App from '../src/App';

// jest.setTimeout(10000);

it('renders correctly', async () => {
  render(<App navigation={{}} />);
});
