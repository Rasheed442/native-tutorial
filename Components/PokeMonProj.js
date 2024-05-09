import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Modal,
  ActivityIndicator,
  SafeAreaView,
  Pressable,
  TextInput,
} from "react-native";
import { arcaine, ladyfox, lafire } from "../assets/IMAGES";

export default function PokeMonProj() {
  const pokecharacter = [
    {
      name: "Arcaine",
      hp: 30,
      image: arcaine,
      power: "Fire",
      moves: "crowl",
    },
    {
      name: "Lady-Fox",
      hp: 42,
      image: ladyfox,
      power: "speed",
      moves: "kicks",
    },
    {
      name: "LaFire",
      hp: 42,
      image: lafire,
      power: "Dragon balls",
      moves: "balls",
    },
  ];
  return (
    <View style={{ padding: 15, flex: 1 }}>
      <SafeAreaView style={styles.safeContainer}>
        <ScrollView>
          {pokecharacter.map((p) => {
            return (
              <Pressable onPress={() => alert(p?.name)}>
                <View style={styles.content} key={p?.name}>
                  <View style={styles.title}>
                    <Text style={styles.titlename}>{p?.name}</Text>
                    <Text style={styles.sub}>HP:{p?.hp}</Text>
                  </View>
                  <View style={styles.imagelogo}>
                    <Image
                      source={p?.image}
                      style={{ height: 200, width: 200 }}
                    />
                    <Button title={p?.power} />
                  </View>
                  <View>
                    <Text style={styles.moves}>Moves:{p?.moves}</Text>
                  </View>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: { borderWidth: 2, borderColor: "red", padding: 10 },
  moves: {
    fontSize: "20px",
  },
  safeContainer: {
    flex: 1,
  },
  content: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginBottom: 30,
  },
  title: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titlename: {
    fontSize: "20px",
    fontWeight: "700",
  },
  sub: {
    fontWeight: "600",
  },
  imagelogo: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
