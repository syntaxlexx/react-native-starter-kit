import React, { useRef } from "react";
import {
  ListRenderItemInfo,
  RefreshControl,
  StyleSheet,
  Animated,
  Pressable,
} from "react-native";
import { Box } from "native-base";

import { ErrorMessage } from "@/components/Forms";
import { EmptyList } from "@/components/Cards";
import { ImageEntity } from "@/types.project";
import ROUTES from "@/navigation/routes";
import Layout from "@/constants/Layout";
import { AppLoading, AppText } from "@/components";
import { useQuery } from "react-query";
import imagesApi from "@/api/images";

const { width, height } = Layout.window;
const s = width * 0.68;
const ITEM_WIDTH = s;
const ITEM_HEIGHT = s * 1.5;
const RADIUS = 18;
const SPACING = 12;
const FULL_SIZE = s + SPACING * 2;

function ImageList({ navigation }) {
  const {
    data: images,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
  } = useQuery(["images"], () => imagesApi.getImages());

  const scrollX = useRef(new Animated.Value(0)).current;

  if (isLoading) return <AppLoading visible={isLoading} />;

  if (isError) return <ErrorMessage error={error} visible={isError} />;

  return (
    <>
      {images.data.length < 1 && <EmptyList bg="white" />}

      <Animated.FlatList
        style={styles.container}
        data={images.data}
        horizontal
        showsHorizontalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={refetch} />
        }
        snapToInterval={FULL_SIZE}
        decelerationRate={0.7}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }: ListRenderItemInfo<ImageEntity>) => {
          const inputRange = [
            (index - 1) * FULL_SIZE,
            index * FULL_SIZE,
            (index + 1) * FULL_SIZE,
          ];

          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [ITEM_WIDTH, 0, -ITEM_WIDTH],
          });

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [1, 1.1, 1],
          });

          return (
            <Pressable
              onPress={() => {
                navigation.navigate(ROUTES.USER_IMAGE_DETAILS, {
                  item,
                });
              }}
              style={styles.itemContainer}
            >
              <Box
                style={[
                  StyleSheet.absoluteFillObject,
                  {
                    overflow: "hidden",
                    borderRadius: RADIUS,
                  },
                ]}
              >
                <Animated.Image
                  source={{ uri: item.download_url }}
                  style={[
                    StyleSheet.absoluteFillObject,
                    styles.image,
                    {
                      transform: [
                        {
                          scale,
                        },
                      ],
                    },
                  ]}
                />
              </Box>
              <Animated.View
                style={{
                  transform: [{ translateX }],
                }}
              >
                <AppText style={styles.author}>{item.author}</AppText>
              </Animated.View>
              <Box style={styles.infoContainer}>
                <AppText style={styles.infoId}>{item.id}</AppText>
                <AppText style={styles.infoText}>#ID</AppText>
              </Box>
            </Pressable>
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    margin: SPACING,
  },
  image: {
    resizeMode: "cover",
  },
  author: {
    fontSize: 30,
    lineHeight: 30,
    color: "#fff",
    fontWeight: "800",
    width: ITEM_WIDTH * 0.8,
    textTransform: "uppercase",
    position: "absolute",
    top: SPACING + 10,
    left: SPACING,
  },
  infoContainer: {
    position: "absolute",
    bottom: SPACING,
    left: SPACING,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "tomato",
    borderRadius: 30,
    height: 60,
    width: 60,
  },
  infoId: {
    fontWeight: "800",
    color: "#fff",
    fontSize: 18,
  },
  infoText: {
    color: "#fff",
    fontSize: 10,
  },
});

export default ImageList;
