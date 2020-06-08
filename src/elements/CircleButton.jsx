import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';

const CircleButton = (props) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    const fn = async () => {
      await Font.loadAsync({
        FontAwesome: fontAwesome,
      });

      setFontLoaded(true);
    };

    fn();
  }, []);
  const { style, color } = props;

  let bgColor = '#e31676';
  let textColor = '#fff';

  if (color === 'white') {
    bgColor = '#fff';
    textColor = '#e31676';
  }

  return (
    <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
      {fontLoaded ? (
        <Text style={[styles.circleButtonTitle, { color: textColor }]}>
          {props.children}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    fontSize: 24,
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontFamily: 'FontAwesome',
    fontSize: 24,
    lineHeight: 24,
    color: '#fff',
  },
});

export default CircleButton;
