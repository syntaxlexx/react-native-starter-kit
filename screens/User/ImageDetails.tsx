import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import { ImageEntity } from "@/types.project";
import ImageView from "@/components/images/ImageView";
import { AppIcon } from "@/components";

const SPACING = 12;

function ImageDetails({ navigation, route }) {
  const { item }: { item: ImageEntity } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <AppIcon
        style={styles.goBack}
        name="ant-arrowleft"
        color="#fff"
        size="28px"
        onPress={navigation.goBack}
      />

      <ImageView navigation={navigation} image={item} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  goBack: {
    paddingHorizontal: SPACING,
    position: "absolute",
    top: SPACING,
    left: 20,
    zIndex: 2,
    width: 100,
  },
});

export default ImageDetails;
