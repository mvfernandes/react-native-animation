import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SvgUri } from 'react-native-svg';
import { Animated } from 'react-native';

export const Img = styled(SvgUri).attrs({
  uri: 'https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg',
})`
  width: ${RFValue(65)}px;
  height: ${RFValue(65)}px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${RFValue(25)}px;
  font-family: 'Nunito-ExtraBold';
`;

export const TextAnimated = styled(Animated.Text)`
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.dark}
  margin-left: ${RFValue(32)}px;
  font-family: 'Nunito-ExtraBold';
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BackgroundContainer = styled(Animated.View)`
  padding: ${RFValue(32)}px;
`;
