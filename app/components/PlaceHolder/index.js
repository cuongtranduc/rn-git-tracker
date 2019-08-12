import React from 'react';
import { View } from 'react-native';
import {
  Placeholder,
  PlaceholderLine,
  Fade
} from "rn-placeholder";

const LoadingPlaceholder = () => (
  <Placeholder
    Animation={Fade}
    style={{ paddingTop: 20 }}
  >
    <View style={{ marginLeft: 20 }}>
      <PlaceholderLine width={30} style={{ marginBottom: 20 }}/>
      <PlaceholderLine width={80} />
    </View>
  </Placeholder>
);

export default LoadingPlaceholder;
