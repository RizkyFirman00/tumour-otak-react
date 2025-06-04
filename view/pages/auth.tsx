// view/pages/Auth.tsx

import { useState } from "react";
import { View, Button } from "react-native";
import Login from "../components/login";
import Register from "../components/register";
import SignIn from "./signIn";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {isLogin ? <SignIn /> : <Register />}
    </View>
  );
}
