import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  Brain,
  LogOut,
  Activity,
  CircleCheckBig,
  CircleAlert,
  Scan,
} from "lucide-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ListHistory from "../components/list_history";

const dataDummy = [
  {
    image:
      "https://multiplesclerosisnewstoday.com/wp-content/uploads/2022/08/CC7C8857-F56B-4524-8E66-A5DD0D03B16F-540x800.jpeg",
    identification: "No Tumor",
    confidence: 75,
    date: "12/07/2022",
  },
  {
    image:
      "https://multiplesclerosisnewstoday.com/wp-content/uploads/2022/08/CC7C8857-F56B-4524-8E66-A5DD0D03B16F-540x800.jpeg",
    identification: "Tumor",
    confidence: 70,
    date: "13/07/2022",
  },
  {
    image:
      "https://multiplesclerosisnewstoday.com/wp-content/uploads/2022/08/CC7C8857-F56B-4524-8E66-A5DD0D03B16F-540x800.jpeg",
    identification: "No Tumor",
    confidence: 45,
    date: "14/07/2022",
  },
  {
    image:
      "https://multiplesclerosisnewstoday.com/wp-content/uploads/2022/08/CC7C8857-F56B-4524-8E66-A5DD0D03B16F-540x800.jpeg",
    identification: "Tumor",
    confidence: 60,
    date: "13/07/2022",
  },
  {
    image:
      "https://multiplesclerosisnewstoday.com/wp-content/uploads/2022/08/CC7C8857-F56B-4524-8E66-A5DD0D03B16F-540x800.jpeg",
    identification: "No Tumor",
    confidence: 95,
    date: "14/07/2022",
  },
  {
    image:
      "https://multiplesclerosisnewstoday.com/wp-content/uploads/2022/08/CC7C8857-F56B-4524-8E66-A5DD0D03B16F-540x800.jpeg",
    identification: "No Tumor",
    confidence: 15,
    date: "18/07/2025",
  },
];

export default function Home() {
  const averageConfidence =
    dataDummy.reduce((sum, item) => sum + item.confidence, 0) /
    dataDummy.length;

  const totalAlert = dataDummy.reduce(
    (sum, item) => sum + (item.identification === "Tumor" ? 1 : 0),
    0
  );
  const lastActivity = dataDummy[dataDummy.length - 1];
  const isTumor = lastActivity.identification === "Tumor";
  const navigation = useNavigation<any>();

  return (
    <View style={styles.rootContainer}>
      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        <View style={styles.containerUtama}>
          {/* Header */}
          <View style={styles.containerHeaderBar}>
            <View style={styles.headbar1}>
              <View style={styles.shapeCircleNormal}>
                <Brain size={30} color="#FFFFFF" strokeWidth={2} />
              </View>
              <View style={styles.textColumn}>
                <Text style={styles.title}>Tumor Otak</Text>
                <Text style={styles.subtitle}>AI Brain Tumor Detection</Text>
              </View>
              <View style={styles.shapeCircleSmall}>
                <LogOut size={20} color="#FFFFFF" strokeWidth={3} />
              </View>
            </View>
            <View style={styles.headbar2}>
              <View style={styles.infoColumn}>
                <Text style={styles.title}>{dataDummy.length}</Text>
                <Text style={styles.subtitle}>Data</Text>
              </View>
              <View style={styles.separator} />
              <View style={styles.infoColumn}>
                <Text style={styles.title}>{averageConfidence}%</Text>
                <Text style={styles.subtitle}>Normal</Text>
              </View>
              <View style={styles.separator} />
              <View style={styles.infoColumn}>
                <Text style={styles.title}>{totalAlert}</Text>
                <Text style={styles.subtitle}>Alert</Text>
              </View>
            </View>
          </View>

          {/* Aktivitas Terbaru */}
          <View style={styles.newActivity}>
            <View style={styles.activityHeader}>
              <Activity
                size={24}
                color="#0099FF"
                strokeWidth={2}
                style={styles.iconMargin}
              />
              <Text style={styles.titleBlack}>Aktivitas Terbaru</Text>
            </View>
            <View
              style={[
                styles.activityCard,
                {
                  backgroundColor: isTumor ? "#FEF2F2" : "#F5FFF6",
                  borderColor: isTumor ? "#FF3B30" : "#00E910",
                },
              ]}
            >
              <View style={styles.activityInfo}>
                {isTumor ? (
                  <CircleAlert
                    size={20}
                    color="#FF3B30"
                    strokeWidth={2}
                    style={styles.iconMargin}
                  />
                ) : (
                  <CircleCheckBig
                    size={20}
                    color="#00E910"
                    strokeWidth={2}
                    style={styles.iconMargin}
                  />
                )}
                <Text
                  style={[
                    styles.activityText,
                    { color: isTumor ? "#FF3B30" : "#00E910" },
                  ]}
                >
                  {isTumor ? "Tumor Terdeteksi" : "Tidak Ada Tumor Terdeteksi"}
                </Text>
              </View>
              <Text
                style={[
                  styles.activityDate,
                  { color: isTumor ? "#FF3B30" : "#00E910" },
                ]}
              >
                {lastActivity.date} • Confidence {lastActivity.confidence}%
              </Text>
            </View>
          </View>

          {/* Riwayat Pemeriksaan */}
          <View style={styles.historyHeader}>
            <Text style={styles.titleBlack}>Riwayat Pemeriksaan</Text>
          </View>
          <FlatList
            data={dataDummy}
            renderItem={({ item }) => (
              <ListHistory
                image={item.image}
                identification={item.identification}
                confidence={item.confidence}
                date={item.date}
              />
            )}
            keyExtractor={(_, index) => index.toString()}
            contentContainerStyle={styles.historyList}
          />
          <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
              <View
                style={{
                  position: "relative",
                  alignItems: "center",
                  marginRight:8
                }}
              >
                <Scan size={35} color="white" />
                <Brain size={15} color="white" style={{ position: "absolute", top:10, left:10}} />
              </View>
              <Text style={styles.title}>Scan Tumor</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: { marginRight: 10 },
  container: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 30,
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 10,
    elevation: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0096FF",
    paddingVertical: 14,
    justifyContent: "center",
    borderRadius: 12,
  },
  rootContainer: {
    flex: 1,
    backgroundColor: "#0099FF",
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#0099FF",
  },
  containerUtama: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  containerHeaderBar: {
    padding: 20,
    backgroundColor: "#0099FF",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headbar1: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  textColumn: {
    flex: 1,
    flexDirection: "column",
  },
  headbar2: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#56BBFF",
    borderRadius: 20,
  },
  infoColumn: {
    flexDirection: "column",
    alignItems: "center",
  },
  separator: {
    backgroundColor: "#D9D9D9",
    width: 2,
    height: 30,
  },
  newActivity: {
    backgroundColor: "#FFFFFF",
    margin: 20,
    padding: 15,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  activityHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconMargin: {
    marginRight: 10,
  },
  activityCard: {
    flexDirection: "column",
    borderWidth: 1,
    padding: 11,
    borderRadius: 15,
    marginTop: 10,
  },
  activityInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4.5,
  },
  activityText: {
    fontSize: 13,
    fontWeight: "bold",
  },
  activityDate: {
    fontSize: 11,
  },
  historyHeader: {
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  historyList: {
    marginHorizontal: 20,
    marginVertical: 7,
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
    color: "#FFFFFF",
  },
  titleBlack: {
    fontSize: 15,
    fontWeight: "500",
    color: "#151515",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#FFFFFF",
  },
});
