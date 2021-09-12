import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>Some text</Text>
      <Text>Some more text</Text>
      <Image 
        source={{uri:'https://reactnative.dev/docs/assets/p_cat2.png'}}
        style={{width:200, height: 200}}
      />
      <TextInput
        style={styles.textInput}
        placeholder="You can type in me"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginHorizontal: 5,
    paddingHorizontal: 5
  }
})

export default App;