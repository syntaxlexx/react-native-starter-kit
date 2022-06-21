import React from "react";
import { StyleSheet } from "react-native";
import { Box, ScrollView, HStack, AlertDialog, Button } from "native-base";

import defaultStyles from "@/constants/Styles";
import Settings from "@/constants/Settings";
import { AppButton, AppText } from "@/components";
import useAuth from "@/auth/useAuth";

var pkg = require("@/package.json");

function ListItem({ title, text }: { title: string; text: string }) {
  return (
    <Box
      borderBottomWidth="1"
      _dark={{
        borderColor: "muted.900",
      }}
      borderColor="muted.100"
      pl="4"
      pr="5"
      py="4"
    >
      <HStack space={3} justifyContent="space-between">
        <AppText
          _dark={{
            color: "warmGray.400",
          }}
          color="coolGray.700"
          fontSize="lg"
          bold
        >
          {title}
        </AppText>

        <AppText
          _dark={{
            color: "warmGray.100",
          }}
          color="coolGray.800"
          fontSize="lg"
        >
          {text}
        </AppText>
      </HStack>
    </Box>
  );
}

function AboutScreen({ navigation }) {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);

  return (
    <>
      <AlertDialog
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
              <Button colorScheme="danger" onPress={logout}>
                Logout
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>

      <ScrollView style={styles.container}>
        <ListItem title="App Name" text={Settings.appName} />
        <ListItem title="App Version" text={pkg.version} />
        <ListItem
          title="Dark Mode Support"
          text={Settings.supportDarkMode ? "Enabled" : "Disabled"}
        />
        <Box>
          <AppButton
            colorScheme="danger"
            onPress={() => setIsOpen(true)}
            title="Logout"
          />
        </Box>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: defaultStyles.padding,
    paddingTop: defaultStyles.padding,
  },
});

export default AboutScreen;
