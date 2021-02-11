import React, {useReducer} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action)=>{
    console.log(state.counter + action.amount);
    return state.counter + action.amount >= 0 ?
    {counter: state.counter + action.amount}:
    state;
}
const screens = () => {
    const[state, dispatch] = useReducer(reducer, {counter: 0});
    const {counter} = state;
    console.log(state);
  return <View >
        <Text style={styles.textCounter}>Current Count: {counter}</Text>
        <Button title="Increase" onPress= {()=> {dispatch({amount: 1})}}/>
        <Button title="Decrease" onPress= {()=> {dispatch({amount: -1})}}/>
  </View>;
};

const styles = StyleSheet.create({
    textCounter: {
        fontSize: 20
    }
})

export default screens; 