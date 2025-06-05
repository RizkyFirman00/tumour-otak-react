// view/pages/Auth.tsx

import { useState } from "react";
import { View, Button } from "react-native";
import Login from "../components/login";
import Register from "../components/register";
import SignIn from "./signIn";
import Home from "./home";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {isLogin ? <SignIn /> : <Home />}
    </View>
  );
}
