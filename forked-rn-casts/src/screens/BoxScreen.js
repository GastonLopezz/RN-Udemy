import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

// import { Container } from './styles';

const BoxScreen = () => {
  return <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}> Child #1 </Text>
      <Text style={styles.textTwoStyle}> Child #2 </Text>
      <Text style={styles.textThreeStyle}> Child #3 </Text>
  </View>
}

const styles = StyleSheet.create({
    viewStyle:{
      borderWidth: 4,
      borderColor: 'black',
      alignItems: 'stretch',
      height: 200,
      justifyContent: 'flex-start',
      flexDirection: 'column'
    },
    textOneStyle:{
      borderWidth: 4,
      borderColor: 'red'
    },
    textTwoStyle:{
      borderWidth: 4,
      borderColor: 'red',
      fontSize: 18,
      ...StyleSheet.absoluteFillObject
    },
    textThreeStyle:{
      borderWidth: 4,
      borderColor: 'red'
    }
});

export default BoxScreen;