// view/pages/Auth.tsx

import { useState } from "react";
import { View, Button } from "react-native";
import Login from "../components/login";
import Register from "../components/register";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  // Global states untuk input
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {isLogin ? (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          rememberMe={rememberMe}
          setRememberMe={setRememberMe}
          switchToRegister={() => setIsLogin(false)}
          onLogin={() => (false)}
        />
      ) : (
        <Register
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          password={password}
          setPassword={setPassword}
          rememberMe={rememberMe}
          setRememberMe={setRememberMe}
          switchToLogin={() => setIsLogin(true)}
        />
      )}
    </View>
  );
}
