import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet(
  {
    pencil: '\uf303',
    plus: '\uf067',
    check: '\uf00c',
  },
  'FontAwesome',
);

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
  const { style, color, name, onPress } = props;

  let bgColor = '#e31676';
  let textColor = '#fff';

  if (color === 'white') {
    bgColor = '#fff';
    textColor = '#e31676';
  }

  return (
    <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
      <View style={[styles.circleButton, { backgroundColor: bgColor }]}>
        {fontLoaded ? <CustomIcon name={name} style={[styles.circleButtonTitle, { color: textColor }]} /> : null}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 48,
    height: 48,
  },
  circleButton: {
    fontSize: 24,
    width: 48,
    height: 48,
    margin: 8,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  circleButtonTitle: {
    fontFamily: 'FontAwesome',
    fontSize: 24,
    lineHeight: 24,
    color: '#fff',
  },
});

export default CircleButton;
