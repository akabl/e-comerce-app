import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>


<View style={styles.body1}><Text style={styles.text}>Home Screen</Text><Text style={styles.text}>Home Screen</Text></View>

<View style={styles.body2}><Text style={styles.text}>Home Screen</Text></View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginHorizontal: 10,
    flexDirection: "row",
   justifyContent: 'center',
   // alignItems: 'center',
  //  backgroundColor: 'black', // Set your desired background color here
  },
  text: {
    fontSize: 20,
  },

  body1: {
    
  },
  body2: {
    backgroundColor: 'red',
    borderRadius: 10,
    marginHorizontal: 30,
  },
});