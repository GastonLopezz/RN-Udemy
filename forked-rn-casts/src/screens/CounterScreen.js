import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const screens = () => {
    const [counter, setCounter] = useState("HELLO");

  return <View >
        <Text style={styles.textCounter}>Current Count: {counter}</Text>
        <Button title="Increase" onPress= {()=> {setCounter("HELLO INCREASED");}}/>
        <Button title="Decrease" onPress= {()=> {setCounter("HELLO DECREASED ");}}/>
  </View>;
};

const styles = StyleSheet.create({
    textCounter: {
        fontSize: 20
    }
})

export default screens;