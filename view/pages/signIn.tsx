import { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  Alert,
} from "react-native";
import Login from "../components/login";
import Register from "../components/register";

const { width } = Dimensions.get("window");

export default function SignIn() {
  const [isLogin, setIsLogin] = useState(true);
  const slideAnim = useRef(new Animated.Value(0)).current;

  // State untuk form
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const toggleSwitch = (option: string) => {
    const toValue = option === "login" ? 0 : 1;

    Animated.timing(slideAnim, {
      toValue,
      duration: 250,
      useNativeDriver: false,
    }).start();

    setIsLogin(option === "login");
  };

  const slideInterpolate = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, width * 0.8 * 0.5 - 4],
  });

  const handleLogin = () => {
    if (email && password) {
      Alert.alert("Login Berhasil", `Selamat datang kembali, ${email}!`);
    } else {
      Alert.alert("Error", "Email dan password harus diisi.");
    }
  };

  const handleRegister = () => {
    if (email && phone && password) {
      Alert.alert("Register Berhasil", `Akun berhasil dibuat untuk ${email}`);
      toggleSwitch("login");
    } else {
      Alert.alert("Error", "Harap lengkapi semua kolom.");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView />
      <View style={styles.containerJudul}>
        <Text style={styles.judul}>{"Tumour\nOtak"} </Text>
        <Text style={styles.subtitle}>
          Tumour otak adalah aplikasi sistem manajemen informasi yang digunakan
          untuk menyimpan rekam medis pasien.
        </Text>
      </View>

      <View style={styles.containerForm}>
        {/* Switch Login/Register */}
        <View style={styles.switchContainer}>
          <Animated.View
            style={[
              styles.slidingBackground,
              {
                transform: [{ translateX: slideInterpolate }],
              },
            ]}
          />
          <TouchableOpacity
            style={styles.option}
            onPress={() => toggleSwitch("login")}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.optionText,
                isLogin ? styles.activeText : styles.inactiveText,
              ]}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => toggleSwitch("register")}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.optionText,
                !isLogin ? styles.activeText : styles.inactiveText,
              ]}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>

        {/* Form Login/Register */}
        <View style={styles.demoContainer}>
          {isLogin ? (
            <Login
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              rememberMe={rememberMe}
              setRememberMe={setRememberMe}
              switchToRegister={() => toggleSwitch("register")}
              onLogin={handleLogin}
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
              switchToLogin={() => toggleSwitch("login")}
            />
          )}
        </View>
      </View>
    </View>
  );
}

// styles tetap sama


const styles = StyleSheet.create({
  containerJudul: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
  },
  containerForm: {
    flex: 3,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "column",
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    backgroundColor: "#EFEFEFFF",
  },
  judul: {
    fontSize: 36,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    marginTop: 10,
    textAlign: "justify",
    fontWeight: "medium",
  },
  switchContainer: {
    flexDirection: "row",
    backgroundColor: "#e0e0e0",
    borderRadius: 25,
    height: 50,
    width: width * 0.79, // 80a% of screen width
    position: "relative",
    overflow: "hidden",
    alignSelf: "center",
    marginTop: 30,
  },
  slidingBackground: {
    position: "absolute",
    top: 2,
    left: 2,
    width: (width * 0.8) / 2 - 4,
    height: 46,
    backgroundColor: "#1B1B1BFF",
    borderRadius: 23,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  option: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "600",
  },
  activeText: {
    color: "#FFFFFFFF",
  },
  inactiveText: {
    color: "#888888",
  },
  demoContainer: {
    flex: 1,
    marginVertical: 30,
    marginHorizontal: 15,
    alignItems: "center",
  },
  demoText: {
    fontSize: 16,
    color: "#666666",
    fontWeight: "500",
  },
});
