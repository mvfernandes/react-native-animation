import React, { ReactNode } from 'react';
import { theme } from '../../styles/theme';
import { ButtonContainer, ButtonStyled, TextStyled } from './styles';

export type ButtonComponentProps = {
  children: ReactNode;
  bg?: keyof typeof theme.colors;
  color?: keyof typeof theme.colors;
};

export function Button({ children, bg, color }: ButtonComponentProps) {
  return (
    <ButtonContainer {...{ bg, color }}>
      <ButtonStyled>
        {typeof children === 'string' ? (
          <TextStyled {...{ color }}>{children}</TextStyled>
        ) : (
          children
        )}
      </ButtonStyled>
    </ButtonContainer>
  );
}
