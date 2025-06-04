import SignIn from "./view/pages/signIn";
import AppNavigator from './navigation/app_navigator';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./view/components/login";
import Register from "./view/components/register";
import Home from "./view/pages/home";

const Stack = createNativeStackNavigator();

export default function App() {
  return <AppNavigator />;
}