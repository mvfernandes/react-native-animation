import styled, { css } from 'styled-components/native';
import { ButtonComponentProps } from '.';

export const ButtonContainer = styled.View<ButtonComponentProps>`
  background-color: transparent;
  ${({ theme, bg }) =>
    !!bg &&
    css`
      background-color: ${theme.colors[bg]};
    `}
  border-radius: 15px;
`;

export const ButtonStyled = styled.TouchableOpacity`
  padding: 12px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 15px;
`;

export const TextStyled = styled.Text<{ color: ButtonComponentProps['color'] }>`
  ${({ theme, color }) =>
    !!color &&
    css`
      color: ${theme.colors[color]};
    `}
    font-family: 'Nunito-Regular';
`;
