import React from 'react';
import { Animated, ViewStyle } from 'react-native';
import { Row, Image, Title, SubTitle, Content } from './styles';

type Props = {
  animatedStyle?: Animated.WithAnimatedObject<ViewStyle>;
};

export function UserCard({ animatedStyle }: Props) {
  return (
    <Row {...{ style: animatedStyle }}>
      <Image />
      <Content>
        <Title>Olá, amiguinho</Title>
        <SubTitle>Seja bem vindo</SubTitle>
      </Content>
    </Row>
  );
}
