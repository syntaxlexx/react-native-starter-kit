import React, { ReactChildren, useState } from "react";
import { StyleSheet, View, Text, Animated } from "react-native";
import { Image } from "native-base";
import {
  ImageHeaderScrollView,
  TriggeringView,
} from "react-native-image-header-scroll-view";

import defaultStyles from "@/constants/Styles";

interface PropsTypes {
  children: ReactChildren[];
  imageUrl: string;
  title: string;
  maxHeight: number;
  minHeight: number;
  maxOverlayOpacity: number;
  minOverlayOpacity: number;
}

function TopImageCardWithNavbar({
  imageUrl,
  title,
  maxHeight = 300,
  minHeight = 70,
  maxOverlayOpacity = 0.8,
  minOverlayOpacity = 0.4,
  children,
}: PropsTypes) {
  const [opacity, setOpacity] = useState(0);

  return (
    <ImageHeaderScrollView
      maxHeight={maxHeight}
      minHeight={minHeight}
      maxOverlayOpacity={maxOverlayOpacity}
      minOverlayOpacity={minOverlayOpacity}
      fadeOutForeground
      renderHeader={() => (
        <Image
          source={{ uri: imageUrl }}
          style={[
            styles.image,
            {
              height: maxHeight,
            },
          ]}
          alt="img"
        />
      )}
      renderFixedForeground={() => (
        <Animated.View
          style={[
            styles.navTitleView,
            {
              height: minHeight,
              opacity: opacity,
            },
          ]}
        >
          <Text style={styles.navTitle}>{title}</Text>
        </Animated.View>
      )}
      renderForeground={() => (
        <View style={styles.titleContainer}>
          <Text style={styles.imageTitle}>{title}</Text>
        </View>
      )}
      onScroll={(event) => {
        const scrolling = event.nativeEvent.contentOffset.y;

        if (scrolling > 150) {
          setOpacity(1);
        } else {
          setOpacity(0);
        }
      }}
      // onScroll will be fired every 16ms
      scrollEventThrottle={16}
    >
      <TriggeringView
        style={styles.section}
        // onHide={() => this.navTitleView.fadeInUp(200)}
        // onDisplay={() => this.navTitleView.fadeOut(100)}
      >
        <Text style={styles.title}>
          <Text style={styles.name}>{title}</Text>
        </Text>
      </TriggeringView>

      {children}
    </ImageHeaderScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 100,
    width: "100%",
    alignSelf: "stretch",
    resizeMode: "cover",
  },
  navTitleView: {
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
  },
  navTitle: {
    color: "white",
    fontSize: 18,
    backgroundColor: "transparent",
  },
  titleContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  imageTitle: {
    color: "white",
    backgroundColor: "transparent",
    fontSize: 24,
  },
  title: {
    fontSize: 20,
  },
  name: {
    fontWeight: "bold",
  },
  section: {
    padding: defaultStyles.padding,
    paddingBottom: 0,
    // borderBottomWidth: 1,
    // borderBottomColor: "#cccccc",
  },
});

export default TopImageCardWithNavbar;
