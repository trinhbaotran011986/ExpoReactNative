import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  TouchableOpacity,
} from "react-native";
import { COLORS, fontWeight } from "../../theme";
import { Label } from "../../components";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Text, Card, Button, Icon } from "@rneui/themed";
export default function StoreDetail(props) {
  const { navigation, route } = props;
  const { item } = route.params;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.base,
      }}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color={"white"} />
          </TouchableOpacity>
        </View>
        <Card containerStyle={{ marginTop: 15 }}>
          <Card.Title> {item.title}</Card.Title>
          <Card.Divider />
          <View style={styles.row}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                minWidth: 200,
              }}
              numberOfLines={1}
            >
              Type:
            </Text>
            <Text
              style={{
                width: 100,
                fontSize: 15,
              }}
              numberOfLines={1}
            >
              {item.type}
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                minWidth: 200,
              }}
              numberOfLines={1}
            >
              score:
            </Text>
            <Text
              style={{
                width: 100,
                fontSize: 15,
              }}
              numberOfLines={1}
            >
              {item.score}
            </Text>
          </View>

          <View style={styles.row}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                minWidth: 200,
              }}
              numberOfLines={1}
            >
              By:
            </Text>
            <Text
              style={{
                minWidth: 200,
                fontSize: 15,
              }}
              numberOfLines={1}
            >
              {item.by}
            </Text>
          </View>

          <View style={styles.row}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                minWidth: 200,
              }}
              numberOfLines={1}
            >
              Descendants:
            </Text>
            <Text
              style={{
                width: 100,
                fontSize: 15,
              }}
              numberOfLines={1}
            >
              {item.descendants}
            </Text>
          </View>
        </Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.base,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "start",
  },
});
