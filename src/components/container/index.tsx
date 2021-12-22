import React from 'react';
import { ReactNode } from 'react';
import { ScrollViewProps } from 'react-native';
import { ContainerStyled, ScrollViewStyled } from './styles';

type Props = {
  children: ReactNode;
  scroll?: boolean | ScrollViewProps;
  noPadding?: boolean;
};

export function Container({ children, scroll, ...rest }: Props) {
  if (scroll) {
    const scrollProps = typeof scroll === 'boolean' ? {} : scroll;
    return (
      <ScrollViewStyled
        {...{
          showsHorizontalScrollIndicator: false,
          showsVerticalScrollIndicator: false,
          ...scrollProps,
        }}
        {...rest}
      >
        {children}
      </ScrollViewStyled>
    );
  }
  return <ContainerStyled {...rest}>{children}</ContainerStyled>;
}
