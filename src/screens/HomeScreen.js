import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

//instead of passing props as an argument you can pass only what you need to shorten you code
//in this case all we needed from props is props.navigation.navigate
//This is called destructuring 
const HomeScreen = ({navigation}) => {
  return (
    <View>
      {/* <Text style={styles.text}>Hi there!</Text> */}
      <Button 
        onPress={() => navigation.navigate('Components')}
        title="Go To Components Demo" 
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
        title="Go to Counter Demo"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button 
        title="Go to Color Demo"
        onPress={() => navigation.navigate('Color')}
      />
      <Button 
        title="Go to Color Adjuster Demo"
        onPress={() => navigation.navigate('Square')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
