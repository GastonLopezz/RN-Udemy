import React from 'react';
import { View, StyleSheet } from 'react-native';

// import { Container } from './styles';

const ViewsScreen = () => {
  return <View style={styles.mainView}>
      <View style={styles.view1}/>
      <View style={styles.view2}/>
      <View style={styles.view3}/>
  </View>;
}

const styles = StyleSheet.create({
    mainView:{
        flexDirection:'row',
        justifyContent: 'space-between',
        height: 200
    },
    view1:{
        height: 100, 
        width: 100, 
        backgroundColor: 'red'
    },
    view2:{
        height: 100, 
        width: 100, 
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    view3:{
        height: 100, 
        width: 100, 
        backgroundColor: 'blue'
    }
});
export default ViewsScreen;