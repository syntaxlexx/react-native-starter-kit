import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Input, Icon, FormControl } from "native-base";

interface PropsTypes {
  icon?: string;
  innerIcon?: string | boolean;
  width?: string;
  label?: string;
  error?: string;
  showError?: boolean;
  handleIconClicked?: Function;
  handleInnerIconClicked?: Function;
}

function AppTextInput({
  icon,
  innerIcon,
  width = "100%",
  label,
  error,
  showError,
  handleIconClicked,
  handleInnerIconClicked,
  ...otherProps
}: PropsTypes) {
  return (
    <View style={styles.container}>
      <FormControl>
        {label && <FormControl.Label>{label}</FormControl.Label>}
        <Input
          variant="outline"
          w={{
            base: width,
            md: "25%",
          }}
          InputLeftElement={
            icon && (
              <Icon
                as={<MaterialCommunityIcons name={icon} />}
                size={5}
                ml="2"
                color="muted.400"
                onPress={handleIconClicked}
              />
            )
          }
          InputRightElement={
            innerIcon && (
              <Icon
                as={<MaterialCommunityIcons name={innerIcon} />}
                size={5}
                mr="2"
                color="muted.400"
                onPress={handleInnerIconClicked}
              />
            )
          }
          {...otherProps}
        />
      </FormControl>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

export default AppTextInput;
