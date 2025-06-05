import { View, StyleSheet, Text } from "react-native";
import {
  Brain,
  LogOut,
  Activity,
  CircleCheckBig,
  Bold,
} from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <View style={styles.rootContainer}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#0099FF" }}>
        <View style={styles.containerUtama}>
          <View style={styles.containerHeaderBar}>
            <View style={styles.headbar1}>
              <View style={styles.shapeCircleNormal}>
                <Brain size={30} color="#FFFFFF" strokeWidth={2} />
              </View>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={styles.title}>Tumor Otak</Text>
                <Text style={styles.subtitle}>AI Brain Tumor Detection</Text>
              </View>
              <View style={styles.shapeCircleSmall}>
                <LogOut size={20} color="#FFFFFF" strokeWidth={3} />
              </View>
            </View>
            <View style={styles.headbar2}>
              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Text style={styles.title}>5</Text>
                <Text style={styles.subtitle}>Home</Text>
              </View>
              <View
                style={{
                  backgroundColor: "#D9D9D9",
                  width: 2,
                  height: 30,
                }}
              />
              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Text style={styles.title}>70%</Text>
                <Text style={styles.subtitle}>Normal</Text>
              </View>
              <View
                style={{
                  backgroundColor: "#D9D9D9",
                  width: 2,
                  height: 30,
                }}
              />
              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Text style={styles.title}>1</Text>
                <Text style={styles.subtitle}>Alert</Text>
              </View>
            </View>
          </View>

          {/* Aktivitas Terbaru */}
          <View style={styles.newAcitvity}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Activity
                size={24}
                color="#0099FF"
                strokeWidth={2}
                style={{ marginRight: 10 }}
              />
              <Text style={styles.titleBlack}>Aktivitas Terbaru</Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                backgroundColor: "#F5FFF6",
                borderWidth: 1,
                padding: 11,
                borderColor: "#00E910",
                borderRadius: 15,
                marginTop: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  marginBottom:4.5,
                  alignItems: "center",
                }}
              >
                <CircleCheckBig
                  size={20}
                  color="#00E910"
                  strokeWidth={2}
                  style={{ marginRight: 8 }}
                />
                <Text
                  style={{ fontSize: 13, fontWeight: "bold", color: "#00E910" }}
                >
                  Tidak Ada Tumor Terdeteksi
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <Text style={{ fontSize: 11, color: "#00E910" }}>
                  12/07/2022 • Confidence 90%
                </Text>
              </View>
            </View>
          </View>

          {/* Riwayat Pemeriksaan */}
          <View>
            <Text style={styles.titleBlack}>Riwayat Pemeriksaan</Text>
          </View>

          <View style={styles.containerHead}></View>
          <View style={styles.containerHistory}></View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#0099FF",
  },
  containerUtama: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  containerHeaderBar: {
    padding: 20,
    flexDirection: "column",
    backgroundColor: "#0099FF",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  containerHead: {
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  containerHistory: {
    flex: 6,
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headbar1: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headbar2: {
    paddingHorizontal: 20,
    backgroundColor: "#56BBFF",
    borderRadius: 20,
    paddingVertical: 20,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  newAcitvity: {
    backgroundColor: "#FFFFFF",
    margin: 20,
    padding: 15,
    borderRadius: 20,
  },
  shapeCircleNormal: {
    padding: 15,
    marginRight: 10,
    backgroundColor: "#56BBFF",
    borderRadius: 100,
    alignItems: "center",
  },
  shapeCircleSmall: {
    padding: 10,
    backgroundColor: "#56BBFF",
    borderRadius: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFFFF",
  },
  titleBlack: {
    fontSize: 13,
    fontWeight: "medium",
    color: "#151515FF",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "regular",
    color: "#FFFFFFFF",
  },
});
