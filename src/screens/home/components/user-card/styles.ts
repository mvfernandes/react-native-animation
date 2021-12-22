import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IconProps } from 'react-native-vector-icons/Icon';
import { RFValue } from 'react-native-responsive-fontsize';
import { Animated } from 'react-native';
import { theme } from '../../../../styles/theme';

export const Row = styled(Animated.View)`
  padding: ${RFValue(20)}px ${RFValue(30)}px;
  flex-direction: row;
  align-items: center;
`;

export const Image = styled(Icon).attrs({
  name: 'user-circle-o',
  size: 45,
  color: theme.colors.dark,
} as IconProps)``;

export const Content = styled.View`
  margin-left: ${RFValue(25)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: 'Nunito-Regular';
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.dark}
  font-family: 'Nunito-ExtraBold';
`;
