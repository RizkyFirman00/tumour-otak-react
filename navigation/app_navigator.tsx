// src/navigation/AppNavigator.tsx
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './auth_navigator';
import MainNavigator from './main_navigator';
import { useState } from 'react';

export default function AppNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
