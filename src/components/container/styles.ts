import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ScrollView } from 'react-native';

type Props = {
  noPadding?: boolean;
};

const getPadding = (props: Props) => {
  return (
    !props.noPadding &&
    css`
      padding: ${RFValue(16)}px;
    `
  );
};

export const ContainerStyled = styled.View<Props>`
  ${getPadding}
  padding-top: ${RFValue(25)}px;
  flex: 1;
`;

export const ScrollViewStyled = styled(ScrollView)<Props>`
  ${getPadding}
  padding-top: ${RFValue(25)}px;
  flex: 1;
`;
