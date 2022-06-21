import { Box, Button, ScrollView, Spacer, Text, useToast } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { AlertDialog } from "native-base";
import { ThemeColors } from "@/theme";

import authStorage from "@/auth/storage";
import useAuth from "@/auth/useAuth";
import ROUTES from "@/navigation/routes";
import Layout from "@/constants/Layout";
import { AppIcon, AppScreen2, AppText, ListItem } from "@/components";
import { UserEntity } from "@/types.project";

const menuItems = [
  {
    title: "Invite Friends",
    icon: "account-multiple-plus-outline",
    color: "orange",
    routeName: ROUTES.INVITE_FRIENDS,
  },
  {
    title: "Contact Us",
    icon: "message",
    color: "green",
    routeName: ROUTES.CONTACT_US,
  },
  {
    title: "FAQ",
    icon: "frequently-asked-questions",
    color: "purple",
    routeName: ROUTES.FAQ,
  },
  {
    title: "About",
    icon: "information-outline",
    color: "indigo",
    routeName: ROUTES.ABOUT,
  },
];

function MenuScreen({ navigation }) {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);
  const [user, setUser] = React.useState<UserEntity | undefined>();
  const toast = useToast();
  const { height } = Layout.window;

  const handleLogout = async () => {
    logout();
  };

  const loadUser = async () => {
    const us: UserEntity | undefined = await authStorage.getUser();
    if (us) setUser(us);
  };

  const viewProfile = () => {
    if (!user) return;

    const role = user.role || "";

    switch (role.toLowerCase()) {
      case "client":
      case "user":
        navigation.navigate(ROUTES.USER_PROFILE);
        break;
      case "admin":
      case "sudo":
        navigation.navigate(ROUTES.ADMIN_PROFILE);
        break;
      default:
        toast.show(
          "Profile could not be found. Please contact the administrator."
        );
        break;
    }
  };

  React.useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      {/* <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Logout?</AlertDialog.Header>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}
              >
                Cancel
              </Button>
              <Button colorScheme="danger" onPress={handleLogout}>
                Logout
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>

      <ScrollView>
        <Box
          style={styles.container}
          _light={{ bg: ThemeColors.lightBg }}
          _dark={{ bg: ThemeColors.dark.background }}
        >
          <Box h={height * 0.8}>
            <Box style={styles.single}>
              <ListItem
                title={"Profile"}
                borderRadius={10}
                _light={{ bg: "white" }}
                _dark={{ bg: "dark.200" }}
                IconComponent={
                  <AppIcon name="account" backgroundColor="blue" />
                }
                onPress={viewProfile}
              />
            </Box>

            {menuItems.map((item, index) => (
              <Box style={styles.single} key={index}>
                <ListItem
                  title={item.title}
                  borderRadius={10}
                  _light={{ bg: "white" }}
                  _dark={{ bg: "dark.200" }}
                  IconComponent={
                    <AppIcon name={item.icon} backgroundColor={item.color} />
                  }
                  onPress={() => {
                    item.routeName ? navigation.navigate(item.routeName) : "";
                  }}
                />
              </Box>
            ))}
          </Box>

          <Box mb="5">
            <ListItem
              title="Logout"
              borderRadius={10}
              _light={{ bg: "orange.300" }}
              _dark={{ bg: "orange.500" }}
              py="5"
              IconComponent={
                <AppIcon name="ant-logout" size={24} color="black" />
              }
              onPress={() => setIsOpen(true)}
            />
          </Box>
        </Box>
      </ScrollView> */}
      <AppScreen2>
        <AppText>Menu</AppText>
      </AppScreen2>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  single: {
    marginBottom: 10,
  },
});

export default MenuScreen;
