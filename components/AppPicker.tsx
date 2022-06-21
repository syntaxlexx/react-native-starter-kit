import React, { ReactElement, useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import DefaultStyles from "@/constants/Styles";
import AppText from "./AppText";
import AppScreen from "./AppScreen";
import AppPickerItem from "./AppPickerItem";

interface PropsTypes {
  icon: string;
  items: Array<any>;
  numberOfColumns?: number;
  PickerItemComponent?: ReactElement;
  placeholder?: string;
  selectedItem?: number | string;
  onSelectItem?: Function;
  width?: number | string;
}

function AppPicker({
  icon,
  items,
  numberOfColumns = 1,
  placeholder,
  PickerItemComponent = AppPickerItem,
  selectedItem,
  onSelectItem,
  width = "100%",
}: PropsTypes) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}

          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <AppScreen>
          <Button title="close" onPress={() => setModalVisible(false)} />

          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          ></FlatList>
        </AppScreen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    ...DefaultStyles.text,
    flex: 1,
  },
  placeholder: {
    ...DefaultStyles.text,
    flex: 1,
    color: DefaultStyles.colors.medium,
  },
});

export default AppPicker;
