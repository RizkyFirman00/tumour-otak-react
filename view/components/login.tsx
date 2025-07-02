import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function Login() {
  
  const navigation = useNavigation<any>();
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.containerMain}>
      {/* Upper Components */}
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.txtInput}
          placeholder="Enter your email"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => {
            setEmail(text)
          }}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.txtInput}
          placeholder="Enter your password"
          secureTextEntry
          autoCorrect={false}
          value={password}
          onChangeText={(text) => {
            setPassword(text)
          }}
          autoCapitalize="none"
        />
      </View>

      {/* Bottom Components */}
      <View>
        {/* Remember Me & Forgot Password */}
        <View style={styles.rowBetween}>
          <View style={styles.row}>
            <Pressable
              style={[styles.checkbox, rememberMe && styles.checkboxChecked]}
              onPress={() => setRememberMe(!rememberMe)}
            />
            <Text style={styles.rememberText}>Remember Me</Text>
          </View>
          {/* Forgot Password */}
          <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
            <Text style={styles.txtForgot}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Button Login */}
        <TouchableOpacity
          style={styles.viewButton}
          onPress={() => {
            if (email && password) {
              Alert.alert("Login", `Selamat Datang ${email}`);
              navigation.navigate("Home");
            } else {
              Alert.alert("Isi semua form dlu", "Email dan Password harus diisi");
            }
          }}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 6,
    marginLeft: 4,
  },
  txtInput: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 14,
    marginBottom: 20,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
    borderRadius: 4,
    marginRight: 8,
  },
  checkboxChecked: {
    backgroundColor: "#000",
  },
  rememberText: {
    fontSize: 14,
  },
  txtForgot: {
    fontSize: 14,
  },
  viewButton: {
    backgroundColor: "#000",
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  switchContainer: {
    alignItems: "center",
  },
  switchText: {
    fontSize: 14,
    color: "#444",
  },
  switchLink: {
    fontWeight: "bold",
    color: "#000",
  },
});
