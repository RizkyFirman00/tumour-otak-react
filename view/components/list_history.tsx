import { View, StyleSheet, Text, Image } from "react-native";
import { CircleCheckBig, Calendar, CircleAlert } from "lucide-react-native";

type ListHistoryProps = {
  image: string;
  identification: string;
  confidence: number;
  date: string;
};

export default function ListHistory({
  image,
  identification,
  confidence,
  date,
}: ListHistoryProps) {
  const isTumor = identification === "Tumor";
  const colorIdentity = isTumor ? "#FF3B30" : "#00E910";

  const barColor =
    confidence >= 75 ? "#00E910" : confidence < 50 ? "#FF3B30" : "#555555";

  return (
    <View style={styles.rootContainer}>
      <View style={styles.leftContainer}>
        <Image
          source={{ uri: image }}
          style={styles.imagePlaceholder}
          resizeMode="contain"
        />

        <View style={styles.contentContainer}>
          <View style={styles.rowContainer}>
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
            <Text style={[styles.identificationText, { color: colorIdentity }]}>
              {identification}
            </Text>
          </View>

          <View style={styles.rowContainer}>
            <Calendar size={20} strokeWidth={2} style={styles.icon} />
            <Text style={styles.dateText}>{date}</Text>
          </View>
        </View>
      </View>

      <View style={styles.rightContainer}>
        <View style={styles.confidenceContainer}>
          <Text style={styles.confidenceText}>{confidence}%</Text>
          <View style={styles.barBackground}>
            <View
              style={[
                styles.barFill,
                {
                  backgroundColor: barColor,
                  width: `${confidence}%`,
                },
              ]}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 20,
    marginBottom: 10,
  },
  leftContainer: {
    flexDirection: "row",
    flex: 1,
  },
  imagePlaceholder: {
    flex: 1,
    backgroundColor: "#000",
    borderRadius: 10,
  },
  contentContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "flex-start",
    marginStart: 10,
  },
  rowContainer: {
    flexDirection: "row",
    marginBottom: 8,
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
  },
  identificationText: {
    fontSize: 18,
    fontWeight: "700",
  },
  dateText: {
    fontSize: 14,
    fontWeight: "300",
    color: "#333333",
  },
  rightContainer: {
    flex: 0,
    justifyContent: "flex-end",
  },
  confidenceContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  confidenceText: {
    marginBottom: 4,
    fontWeight: "500",
  },
  barBackground: {
    width: 80,
    height: 6,
    backgroundColor: "#E0E0E0",
    borderRadius: 20,
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    borderRadius: 20,
  },
  iconMargin: {
    marginRight: 10,
  },
});
