import React, {useState} from 'react';
import { View, StyleSheet, Button, Text} from 'react-native';


const ColorCounter = (props) => {

  return (
  <View>
      <Text style={styles.text}> {props.color} </Text>
      <Button title={`More ${props.color}`} onPress= {()=> props.onIncrease()}/>
      <Button title={`Less ${props.color}`} onPress= {()=> props.onDecrease()}/>
  </View>
  );
};
const styles = StyleSheet.create({
    text: {
      fontSize:30
    }
  });
export default ColorCounter;