import React, {useState} from 'react';
import { View, StyleSheet, Button, Text} from 'react-native';
import ColorCounter from '../components/ColourCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [blue, setBlue] = useState(0);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  console.log(`Red: ${red}`);
  console.log(`Blue: ${blue}`);
  console.log(`Green: ${green}`);

  const setColor = (color, change) => {
    switch(color){ 
      case 'red':
        red + change > 255 || red + change <0 ? null : setRed(red + change);
        return;
      case 'blue':
        blue + change > 255 || blue + change <0 ? null : setBlue(blue + change)
        return;
      case 'green':
        green + change > 255 || green + change <0 ? null : setGreen(green + change)
        return;
      default:
        return;
    } 
  }
  return (
  <View>
      <ColorCounter 
        onIncrease={()=> {setColor('red', COLOR_INCREMENT)}} 
        onDecrease={()=> setColor('red' , -1 * COLOR_INCREMENT)} 
        color="red"/>
      <ColorCounter 
        onIncrease={()=> setColor('blue', COLOR_INCREMENT)} 
        onDecrease={()=> setColor('blue', -1 * COLOR_INCREMENT)} 
        color="blue"/>
      <ColorCounter 
        onIncrease={()=> setColor('green', COLOR_INCREMENT)} 
        onDecrease={()=> setColor('green', -1 * COLOR_INCREMENT)} 
        color="green"/>
      <View style={{height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})`}}/>
  </View>
  );
};
const styles = StyleSheet.create({
    text: {
      fontSize:30
    }
  });
export default SquareScreen;