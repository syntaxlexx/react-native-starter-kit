import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Box, FlatList, Image } from "native-base";
import * as Animatable from "react-native-animatable";

import {AppText} from "@/components";
import { ImageEntity } from "@/types.project";
import Layout from "@/constants/Layout";

const { width } = Layout.window;
const s = width * 0.68;
const ITEM_WIDTH = s;
const SPACING = 12;

const zoomIn = {
  0: {
    opacity: 0,
    scale: 0,
  },
  1: {
    opacity: 1,
    scale: 1,
  },
};

interface Props {
  image: ImageEntity;
  navigation: any;
}

function ImageView({ navigation, image }: Props) {
  return (
    <>
      <Box style={[StyleSheet.absoluteFillObject]}>
        <Image
          source={{ uri: image.download_url }}
          alt="img"
          style={[StyleSheet.absoluteFillObject, styles.image]}
        />
      </Box>

      <AppText style={styles.author}>{image.author}</AppText>

      <Box style={styles.activitiesContainer}>
        <AppText>Activities</AppText>
        <FlatList
          data={[...Array(8).keys()]}
          keyExtractor={(item) => String(item)}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding: SPACING }}
          renderItem={({ item, index }) => {
            return (
              <Animatable.View
                animation={zoomIn}
                duration={700}
                delay={400 + index * 100}
                style={styles.activityItem}
              >
                <Image
                  source={require("@/assets/images/pet-1.jpg")}
                  style={styles.activityItemImage}
                  alt="image"
                />
                <AppText style={styles.activityItemTitle}>
                  Activity #{item + 1}
                </AppText>
              </Animatable.View>
            );
          }}
        />
      </Box>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
  },
  author: {
    fontSize: 30,
    lineHeight: 30,
    color: "#fff",
    fontWeight: "800",
    textTransform: "uppercase",
    position: "absolute",
    top: SPACING + 70,
    left: SPACING * 2,
    width: ITEM_WIDTH * 0.8,
  },
  activitiesContainer: {
    position: "absolute",
    bottom: 120,
    left: SPACING,
    right: SPACING,
  },
  activityItem: {
    backgroundColor: "white",
    padding: SPACING,
    width: ITEM_WIDTH * 0.4,
    height: ITEM_WIDTH * 0.6,
    marginRight: 20,
  },
  activityItemTitle: {
    fontSize: 12,
    textTransform: "uppercase",
    color: "black",
  },
  activityItemImage: {
    width: "100%",
    height: "70%",
    resizeMode: "cover",
  },
});

export default ImageView;
