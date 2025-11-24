import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './src/navigation';
import { AuthProvider } from './src/contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;