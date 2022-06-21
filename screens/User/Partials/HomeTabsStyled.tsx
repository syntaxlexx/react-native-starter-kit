import React from "react";
import Tabbar from "@mindinventory/react-native-tab-bar-interaction";
import ROUTES from "@/navigation/routes";
import { Icon } from "native-base";

const tabs = [
  {
    name: ROUTES.USER_HOME,
    activeIcon: <Icon name="home" color="#fff" size={25} />,
    inactiveIcon: <Icon name="home" color="#4d4d4d" size={25} />,
  },
  {
    name: ROUTES.USER_TAB_ONE,
    activeIcon: <Icon name="list-ul" color="#fff" size={25} />,
    inactiveIcon: <Icon name="list-ul" color="#4d4d4d" size={25} />,
  },
  {
    name: ROUTES.USER_TAB_TWO,
    activeIcon: <Icon name="list-ul" color="#fff" size={25} />,
    inactiveIcon: <Icon name="list-ul" color="#4d4d4d" size={25} />,
  },
];

function HomeTabsStyled({ navigation }) {
  return (
    <Tabbar
      tabs={tabs}
      tabBarContainerBackground="#6699ff"
      tabBarBackground="#fff"
      activeTabBackground="#6699ff"
      labelStyle={{ color: "#4d4d4d", fontWeight: "600", fontSize: 11 }}
      onTabChange={() => console.log("Tab changed")}
    />
  );
}

export default HomeTabsStyled;
