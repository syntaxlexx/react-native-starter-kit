import React from "react";
import ROUTES from "@/navigation/routes";
import {
  Avatar,
  Box,
  Divider,
  HStack,
  Icon,
  Pressable,
  VStack,
} from "native-base";
import { UserEntity } from "@/types.project";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AppText } from "@/components";

const drawerItems = [
  {
    title: "Home",
    icon: "home",
    route: ROUTES.ADMIN_HOME,
  },
  {
    title: "Profile",
    icon: "account",
    route: ROUTES.MENU,
  },
];

const drawerBottomItems = [
  {
    title: "About App",
    icon: "information",
    route: ROUTES.ABOUT,
  },
];

interface State {
  index: number;
}

interface Props {
  user?: UserEntity;
  navigation: any;
  state?: State;
}

function AdminDrawer(props: Props) {
  console.log("props", props?.user);
  return (
    <VStack space="6" my="2" mx="1">
      {props.user && (
        <Box px="4">
          <HStack space="4">
            <Box>
              <Avatar
                bg="green.500"
                source={{
                  uri: props.user?.avatar,
                }}
              ></Avatar>
            </Box>
            <Box>
              <AppText bold color="gray.700">
                {props.user?.fullName && props.user?.nickname} ~{" "}
                {props.user?.role && props.user?.role}
              </AppText>
              {props.user?.email && (
                <AppText fontSize="14" mt="1" color="gray.500" fontWeight="500">
                  {props.user?.email}
                </AppText>
              )}
              {props.user?.phone && (
                <AppText fontSize="12" mt="1" color="gray.500" fontWeight="500">
                  {props.user?.phone}
                </AppText>
              )}
            </Box>
          </HStack>
        </Box>
      )}

      <VStack divider={<Divider />} space="4">
        <VStack space="3">
          {drawerItems.map((menu, index) => (
            <Pressable
              px="5"
              py="3"
              rounded="md"
              key={index}
              bg={
                index === props.state?.index
                  ? "rgba(6, 182, 212, 0.1)"
                  : "transparent"
              }
              onPress={(event) => {
                props.navigation.navigate(menu.route);
              }}
            >
              <HStack space="7" alignItems="center">
                <Icon
                  color={
                    index === props.state?.index ? "primary.500" : "gray.500"
                  }
                  size="5"
                  as={<MaterialCommunityIcons name={menu.icon} />}
                />
                <AppText
                  fontWeight="500"
                  color={
                    index === props.state?.index ? "primary.500" : "gray.700"
                  }
                >
                  {menu.title}
                </AppText>
              </HStack>
            </Pressable>
          ))}
        </VStack>

        <VStack space="5">
          <AppText fontWeight="500" fontSize="14" px="5" color="gray.500">
            About
          </AppText>
          <VStack space="3">
            {drawerBottomItems.map((menu, index) => (
              <Pressable
                px="5"
                py="3"
                rounded="md"
                key={index}
                bg={
                  index === props.state?.index
                    ? "rgba(6, 182, 212, 0.1)"
                    : "transparent"
                }
                onPress={(event) => {
                  props.navigation.navigate(menu.route);
                }}
              >
                <HStack space="7" alignItems="center">
                  <Icon
                    color={
                      index === props.state?.index ? "primary.500" : "gray.500"
                    }
                    size="5"
                    as={<MaterialCommunityIcons name={menu.icon} />}
                  />
                  <AppText
                    fontWeight="500"
                    color={
                      index === props.state?.index ? "primary.500" : "gray.700"
                    }
                  >
                    {menu.title}
                  </AppText>
                </HStack>
              </Pressable>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  );
}

export default AdminDrawer;
