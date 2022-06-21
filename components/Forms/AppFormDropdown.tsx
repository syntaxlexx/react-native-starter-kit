import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Box } from "native-base";
import SearchableDropdown from "react-native-searchable-dropdown";
import useColorScheme from "@/hooks/useColorScheme";

interface PropsTypes {
  items: Array<any>;
  placeholder?: string;
  addItem: Function;
  removeItem: Function;
  onTextChange: Function;
}

function AppFormDropdown({
  items,
  placeholder = "Select",
  addItem,
  removeItem,
  onTextChange,
}:PropsTypes) {
  const colorScheme = useColorScheme();

  return (
    <Box style={styles.container}>
      <SearchableDropdown
        onItemSelect={addItem}
        onRemoveItem={removeItem}
        containerStyle={{ padding: 5 }}
        itemStyle={{
          padding: 10,
          marginTop: 2,
          backgroundColor: colorScheme == "light" ? "#ddd" : "#333",
          borderColor: "#bbb",
          borderWidth: 1,
          borderRadius: 5,
        }}
        itemTextStyle={{
          color: colorScheme == "light" ? "#222" : "#fff",
        }}
        placeholderTextColor={colorScheme == "light" ? "#222" : "#fff"}
        itemsContainerStyle={{ maxHeight: 140 }}
        items={items}
        defaultIndex={2}
        resetValue={false}
        textInputProps={{
          placeholder: placeholder,
          underlineColorAndroid: "transparent",
          style: {
            padding: 12,
            borderWidth: 1,
            borderColor: colorScheme == "light" ? "#ccc" : "#444",
            borderRadius: 5,
          },
          onTextChange: onTextChange, // receives text
        }}
        listProps={{
          nestedScrollEnabled: true,
        }}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppFormDropdown;
