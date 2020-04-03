import React from 'react';
import { Text, View, ScrollView, TextInput,StyleSheet, Button } from 'react-native';
import Home from './components/home' 

export default function Login (props) {
    return (
        
           
              <View style={styles.container}>

                <Home/>
              </View>
        
    );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  title: {
      padding: 8,
      fontSize: 28,
      fontWeight: 'bold',
  },
  label: {
      padding: 6,
      fontSize: 20,
  },
  boxInput:{
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#000000',
    minWidth:100,
    minHeight:20,
  },
});

