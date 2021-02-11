import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
      onPress={() => navigation.navigate('Counter')}
      title="Go to Counter Demo"
    />
    <Button
      onPress={() => navigation.navigate('Color')}
      title="Go to Color Demo"
    />
    <Button
      onPress={() => navigation.navigate('Square')}
      title="Go to Square Demo"
    />
    <Button
      onPress={() => navigation.navigate('Text')}
      title="Go to Text Demo"
    />
    <Button
      onPress={() => navigation.navigate('Box')}
      title="Go to Box Demo"
    />
    <Button
      onPress={() => navigation.navigate('View')}
      title="Go to View Demo"
    />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
