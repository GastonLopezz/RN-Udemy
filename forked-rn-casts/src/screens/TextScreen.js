import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    const [passwd,setPasswd] = useState('');

  return (<View > 
      <Text> Name: </Text>
      <TextInput 
        style={styles.input}
        autoCapitalize="sentences"
        autoCorrect={true}
        value={name}
        onChangeText={(change) => setName(change)}
        />
        <Text> Password: </Text>
        <TextInput 
        style={styles.input}
        autoCapitalize="sentences"
        autoCorrect={true}
        value={passwd}
        onChangeText={(change) => setPasswd(change)}
        />
        {passwd.length < 5 &&
        <Text> The Password must contain at least 5 characters </Text>}
  </View>);
}


const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextScreen; 