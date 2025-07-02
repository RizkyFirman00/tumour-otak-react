// src/navigation/MainNavigator.tsx
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPassword from "../view/pages/forgot_password";
import Register from "../view/components/register";
import SignIn from "../view/pages/signIn";
import Home from "../view/pages/home";

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
