/**
 * Cleaning Service App - Main Application Component
 * Professional cleaning service mobile application
 */

import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#3498db" />
      <AppNavigator />
    </>
  );
};

export default App;
