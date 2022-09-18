/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {TailwindProvider} from 'tailwindcss-react-native';
import {config} from 'configs/google';
import {StackView} from './StackView';

GoogleSignin.configure(config);

const App = () => {
  return (
    <TailwindProvider styles={{}}>
      <StackView />
    </TailwindProvider>
  );
};

export default App;
