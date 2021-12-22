import React, { useRef } from 'react';
import { Animated, Dimensions, ScrollView, View } from 'react-native';
import {
  HandlerStateChangeEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
  State,
} from 'react-native-gesture-handler';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

import { Container } from '../../components/container';

import { Button } from '../../components/button';
import { VoidFiller } from '../../components/void-filler';
import { BackgroundContainer, Img, Row, Text, TextAnimated } from './styles';
import { UserCard } from './components/user-card';

export function Home() {
  const offset = useRef(0);
  const translateY = useRef(new Animated.Value(0)).current;

  const onHandlerStateChange = (
    event: HandlerStateChangeEvent<PanGestureHandlerEventPayload>,
  ) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationY, y } = event.nativeEvent;
      offset.current += translationY;
      console.log('onHandlerStateChange()->', { translationY });
      if (translationY < -150) {
        // translateY.setValue(offset.current);
        translateY.setOffset(offset.current);
        return;
      }
      let opened = false;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset.current);
        translateY.setOffset(0);
        offset.current = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 320 : 0,
        useNativeDriver: true,
        duration: 350,
      }).start(() => {
        offset.current = opened ? 320 : 0;
        translateY.setOffset(offset.current);
        translateY.setValue(0);
      });
    }
  };

  const opacityInterpolator = translateY.interpolate({
    inputRange: [0, 160, 240, 320],
    outputRange: [0, 0, 0.3, 1],
  });

  return (
    <Container noPadding>
      <View style={{ position: 'relative' }}>
        <TextAnimated
          style={{
            opacity: opacityInterpolator,
          }}>
          Olá, amiguinho
        </TextAnimated>

        <UserCard
          animatedStyle={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [-320, 0, 320],
                  outputRange: [0, 0, -320],
                }),
              },
            ],
          }}
        />
      </View>

      <VoidFiller height={40} />

      <View
        style={{
          position: 'relative',
        }}>
        <BackgroundContainer
          style={{
            opacity: opacityInterpolator,
          }}>
          <Text>
            Comunidade de programadores anônimos. Embarque você também, é
            baratinho 🚀
          </Text>
          <VoidFiller height={60} />
          <Row>
            <Button bg="black" color="light">
              Acessar conta
            </Button>
            <VoidFiller width={10} />
            <Button color="dark">Criar conta</Button>
          </Row>
        </BackgroundContainer>

        <PanGestureHandler
          onGestureEvent={Animated.event(
            [
              {
                nativeEvent: {
                  translationY: translateY,
                },
              },
            ],
            { useNativeDriver: true },
          )}
          onHandlerStateChange={onHandlerStateChange}>
          <Animated.View
            style={{
              flex: 1,
              position: 'absolute',
              top: 0,
              right: 0,
              left: 0,
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-SCREEN_HEIGHT, 0, 320],
                    outputRange: [-SCREEN_HEIGHT, 0, 320],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <Animated.View
              style={{
                alignItems: 'center',
                top: -5,
                opacity: translateY.interpolate({
                  inputRange: [0, 320],
                  outputRange: [0, 1],
                }),
              }}>
              <MaterialIcons name="keyboard-arrow-up" size={24} />
            </Animated.View>
            <ScrollView
              style={{
                backgroundColor: '#fff',
                minHeight: SCREEN_HEIGHT * 2,
                borderTopLeftRadius: 45,
                borderTopRightRadius: 45,
                paddingTop: 30,
                padding: 20,
              }}>
              <Container>
                <Img />
                <VoidFiller height={30} />
                <Text>
                  Programação é muito legal! Se eu fosse tu, programava também.
                </Text>
              </Container>
            </ScrollView>
          </Animated.View>
        </PanGestureHandler>
      </View>
    </Container>
  );
}
