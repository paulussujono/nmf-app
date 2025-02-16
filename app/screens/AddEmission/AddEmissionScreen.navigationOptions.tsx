import React from "react";

import { Text } from "../../components";
import { t } from "../../utils";
import { Colors, ComponentsStyle } from "../../style";
import { InfoButton } from "./components";

const navigationOptions = () => ({
  ...ComponentsStyle.transitionBetweenScreenPresets,
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerBackTitleVisible: false,
  headerTintColor: Colors.grey100,
  headerRight: () => <InfoButton />,
  headerTitle: () => <Text.H1>{t("ADD_EMISSION_TITLE")}</Text.H1>,
});
export default navigationOptions;
