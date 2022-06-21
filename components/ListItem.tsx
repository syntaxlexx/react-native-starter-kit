import React, { ReactChild } from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { ThemeColors } from "@/theme";
import AppText from "./AppText";
import { Box } from "native-base";

interface PropsTypes {
  title: string;
  subTitle?: string;
  image?: string;
  IconComponent: ReactChild;
  onPress?: Function;
  renderRightActions: any;
  styling: object;
}

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  styling = {},
  ...otherProps
}: PropsTypes) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={ThemeColors.light} onPress={onPress}>
        <Box style={styles.container} {...otherProps}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}

          <Box style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </Box>
          <MaterialCommunityIcons
            name="chevron-right"
            color={ThemeColors.medium}
            size={25}
          />
        </Box>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    // backgroundColor: ThemeColors.white,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: ThemeColors.medium,
  },
  title: {
    fontWeight: "500",
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
});

export default ListItem;
