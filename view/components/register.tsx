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
import { useState } from "react";

export default function Register() {

  const [rememberMe, setRememberMe] = useState(false);
  const handleRegister = () => {
    Alert.alert("Register", "Registration successful!");
  }

  return (
    <SafeAreaView style={styles.containerMain}>
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.txtInput}
          placeholder="Enter your email"
          keyboardType="email-address"
          value={""}
          autoCorrect={false}
          autoCapitalize="none"
        />

        <Text style={styles.label}>No. Telepon</Text>
        <TextInput
          style={styles.txtInput}
          placeholder="Enter your number"
          keyboardType="phone-pad"
          autoCorrect={false}
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.txtInput}
          placeholder="Enter your password"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>

      {/* Bottom Components */}
      <View>
        {/* Remember Me */}
        <View style={styles.rowBetween}>
          <View style={styles.row}>
            <Pressable
              style={[styles.checkbox, rememberMe && styles.checkboxChecked]}
              onPress={() => setRememberMe(!rememberMe)}
            />
            <Text style={styles.rememberText}>Remember Me</Text>
          </View>
          <Text style={styles.txtForgot}>Forgot Password?</Text>
        </View>

        {/* Register Button */}
        <TouchableOpacity style={styles.viewButton} onPress={handleRegister}>
          <Text style={styles.btnText}>Register</Text>
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
    color: "#555",
  },
  viewButton: {
    backgroundColor: "#000",
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
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
