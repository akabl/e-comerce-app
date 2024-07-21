import {Image, StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView} from 'react-native';

export default function Page() {
  return (
    <ScrollView style={{backgroundColor: 'black'}}>
  <View style={styles.container4Card}> 
  
  
  
  <Text style={styles.text}>checkout</Text>
  <Image
         Image source={require('/Users/User/Desktop/e-comerce app/store/assets/card.png')} 
          style={styles.productImage}
        />

  </View>
<View style={styles.container2}> 
<Image
         Image source={require('/Users/User/Desktop/e-comerce app/store/assets/card.png')} 
         style={styles.productImage2}
        />
<Text style={styles.text}>Wallet</Text>

<Text style={styles.text}>$160.00</Text>

  </View>



</ScrollView>

)}





const styles = StyleSheet.create({

productImage: {
  borderRadius: 15, 
width: 350,
height: 210,
marginHorizontal: 8,
},

productImage2: {
  borderRadius: 15, 
width: 50,
height: 50,
marginHorizontal: 8,
},
container4Card: {
  borderRadius: 150, 
//width: 350,
//height: 210,
//marginHorizontal: 20,
borderRadius: 10,
borderColor: 'red',

marginVertical:15,

 
},
container2: {
  flexDirection: "row",
  justifyContent: "space-between",
  //alignContent: "center",
  borderRadius: 25, 
//width: 350,
//height: 210,
marginHorizontal: 20,

borderColor: "white",

marginVertical:15,
backgroundColor: 'ash'
 
},
text: {

  marginBottom: 10,
  color: 'white',
  fontSize: 20,
},

});

