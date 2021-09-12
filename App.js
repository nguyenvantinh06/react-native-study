import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, TextInput, ScrollView, Button } from 'react-native';

const getFullName = (firstName, lastName) =>{
  return firstName + ' ' + lastName;
}
const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View style={{alignItems: 'center'}}>
      <Text>
        I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
      </Text>
      <Button
        onPress={()=>{
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry? "Pour me some milk, please!" : "Thank you!"}
      />
    </View>
    
  );
}

const App = () => {
  return (
    <>
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
        <Text>Hello, I am {getFullName("Tinh","Nguyen")}</Text>
        <Cat name="Munkustrap" />
        <Cat name="Spot" />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    marginVertical: 5,
  }
})

export default App;