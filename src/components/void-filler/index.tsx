import React from 'react';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

type Props = {
  height?: number;
  width?: number;
};

export function VoidFiller({ width, height }: Props) {
  return (
    <View
      style={{
        height: RFValue(height || 0),
        width: RFValue(width || 0),
      }}
    ></View>
  );
}
