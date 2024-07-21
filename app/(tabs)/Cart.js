
import { Link } from 'expo-router';
import {Image, StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView} from 'react-native';

export default function Page() {
  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      
      <View style={{
        borderRadius: 15, 
        margin: 20,
            backgroundColor: '#5A5A5A'
            }}>
    
    <View style={styles.container}>
      <View style={styles.wrapperImageCheck}>
       
        <Image
         Image source={require('/Users/User/Desktop/e-comerce app/store/assets/free.jpeg')} 
          style={styles.productImage}
        />
      </View>
      <View style={{justifyContent: 'space-between'}}>
        <View>
          <Text style={{fontWeight: '600',  marginHorizontal: 15, color: 'white',}}>Cappuccino</Text>
          <Text style={{fontWeight: '300', marginHorizontal: 15,  margin: 1,color: 'white',}} >from Africa</Text>
          <View style={styles.wrapperCardBottom}>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.iconPlus}>W</Text>
        </TouchableOpacity>
          <Text style={{ marginHorizontal: 15,  margin: 1,color: 'white',}}>$ 300</Text>
          </View>
        </View>
        <View style={styles.wrapperCardBottom2}>
          <TouchableOpacity style={styles.button}>
            <Text style={{fontWeight: '600'}}>-</Text>
          </TouchableOpacity>
          <View style={styles.button2}>
          
          <Text style={{ color: 'white',}} >3</Text></View>
          <TouchableOpacity style={[styles.button, {borderColor: 'green'}]}>
            <Text style={styles.iconPlus}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
      </View>
     
      
      <View style={{
        borderRadius: 15, 
        margin: 20,
            backgroundColor: '#5A5A5A'
            }}>
    
    <View style={styles.container}>
      <View style={styles.wrapperImageCheck}>
       
        <Image
         Image source={require('/Users/User/Desktop/e-comerce app/store/assets/Cup.png')} 
          style={styles.productImage}
        />
      </View>
      <View style={{justifyContent: 'space-between'}}>
        <View>
          <Text style={{fontWeight: '600',  marginHorizontal: 15, color: 'white',}}>Robusta Beans</Text>
          <Text style={{fontWeight: '300', marginHorizontal: 15,  margin: 1,color: 'white',}} >with steamed milk </Text>
          <View style={styles.wrapperCardBottom}>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.iconPlus}>W</Text>
        </TouchableOpacity>
          <Text style={{ marginHorizontal: 15,  margin: 1,color: 'white',}}>$ 300</Text>
          </View>
        </View>
        <View style={styles.wrapperCardBottom2}>
          <TouchableOpacity style={styles.button}>
            <Text style={{fontWeight: '600'}}>-</Text>
          </TouchableOpacity>
          <View style={styles.button2}>
          
          <Text style={{ color: 'white',}} >3</Text></View>
          <TouchableOpacity style={[styles.button, {borderColor: 'green'}]}>
            <Text style={styles.iconPlus}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
      </View>
     
      
      <View style={{
        borderRadius: 15, 
        margin: 20,
            backgroundColor: '#5A5A5A'
            }}>
    
    <View style={styles.container}>
      <View style={styles.wrapperImageCheck}>
       
        <Image
         Image source={require('/Users/User/Desktop/e-comerce app/store/assets/beans.jpg')} 
          style={styles.productImage}
        />
      </View>
      <View style={{justifyContent: 'space-between'}}>
        <View>
          <Text style={{fontWeight: '600',  marginHorizontal: 15, color: 'white',}}>Cappuccino</Text>
          <Text style={{fontWeight: '300', marginHorizontal: 15,  margin: 1,color: 'white',}} >from Africa</Text>
          <View style={styles.wrapperCardBottom}>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.iconPlus}>W</Text>
        </TouchableOpacity>
          <Text style={{ marginHorizontal: 15,  margin: 1,color: 'white',}}>$ 300</Text>
          </View>
        </View>
        <View style={styles.wrapperCardBottom2}>
          <TouchableOpacity style={styles.button}>
            <Text style={{fontWeight: '600'}}>-</Text>
          </TouchableOpacity>
          <View style={styles.button2}>
          
          <Text style={{ color: 'white',}} >3</Text></View>
          <TouchableOpacity style={[styles.button, {borderColor: 'green'}]}>
            <Text style={styles.iconPlus}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
      </View>
     
      
      <View style={{
        borderRadius: 15, 
        margin: 20,
            backgroundColor: '#5A5A5A'
            }}>
    
    <View style={styles.container}>
      <View style={styles.wrapperImageCheck}>
       
        <Image
         Image source={require('/Users/User/Desktop/e-comerce app/store/assets/coffee.webp')} 
          style={styles.productImage}
        />
      </View>
      <View style={{justifyContent: 'space-between'}}>
        <View>
          <Text style={{fontWeight: '600',  marginHorizontal: 15, color: 'white',}}>Cappuccino</Text>
          <Text style={{fontWeight: '300', marginHorizontal: 15,  margin: 1,color: 'white',}} >from Africa</Text>
          <View style={styles.wrapperCardBottom}>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.iconPlus}>W</Text>
        </TouchableOpacity>
          <Text style={{ marginHorizontal: 15,  margin: 1,color: 'white',}}>$ 300</Text>
          </View>
        </View>
        <View style={styles.wrapperCardBottom2}>
          <TouchableOpacity style={styles.button}>
            <Text style={{fontWeight: '600'}}>-</Text>
          </TouchableOpacity>
          <View style={styles.button2}>
          
          <Text style={{ color: 'white',}} >3</Text></View>
          <TouchableOpacity style={[styles.button, {borderColor: 'green'}]}>
            <Text style={styles.iconPlus}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
      </View>
     
      
      <View style={{
        borderRadius: 15, 
        margin: 20,
            backgroundColor: '#5A5A5A'
            }}>
    
    <View style={styles.container}>
      <View style={styles.wrapperImageCheck}>
       
        <Image
         Image source={require('/Users/User/Desktop/e-comerce app/store/assets/beans.jpg')} 
          style={styles.productImage}
        />
      </View>
      <View style={{justifyContent: 'space-between'}}>
        <View>
          <Text style={{fontWeight: '600',  marginHorizontal: 15, color: 'white',}}>Cappuccino</Text>
          <Text style={{fontWeight: '300', marginHorizontal: 15,  margin: 1,color: 'white',}} >from Africa</Text>
          <View style={styles.wrapperCardBottom}>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.iconPlus}>W</Text>
        </TouchableOpacity>
          <Text style={{ marginHorizontal: 15,  margin: 1,color: 'white',}}>$ 300</Text>
          </View>
        </View>
        <View style={styles.wrapperCardBottom2}>
          <TouchableOpacity style={styles.button}>
            <Text style={{fontWeight: '600'}}>-</Text>
          </TouchableOpacity>
          <View style={styles.button2}>
          
          <Text style={{ color: 'white',}} >3</Text></View>
          <TouchableOpacity style={[styles.button, {borderColor: 'green'}]}>
            <Text style={styles.iconPlus}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
      </View>
     
      



      <View style={styles.container1}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Total Price</Text>
        <Text style={styles.text}>$46</Text>
      </View>
      <TouchableOpacity style={styles.button3}>
      <Link href="/checkout">
        <Text style={styles.buttonText}>Big Orange Button</Text>
        </Link>
      </TouchableOpacity>
    </View>



    </ScrollView>)
}




const styles = StyleSheet.create({
    container: {margin: 10,
      flexDirection: 'row',
      marginBottom: 10,
      
    },
    wrapperImageCheck: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    productImage: {
        borderRadius: 15, 
      width: 110,
      height: 110,
      marginHorizontal: 8,
    },
    button: {
        backgroundColor:"orange",
      borderWidth: 0.5,
      borderRadius: 4,
      width: 25,
      height: 25,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 16,
      
    },
    button2: {
        backgroundColor:"black",
      borderWidth: 0.5,
      borderRadius: 4,
      width: 35,
      height: 25,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 10,
      
    },
    iconPlus: {
     
      fontWeight: '600',
    },
    wrapperCardBottom: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    wrapperCardBottom2: {
      flexDirection: 'row',
      alignItems: 'center',
    },



//css for the total price footer 
    container1: {
        paddingHorizontal: 10,
        marginVertical: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
       // backgroundColor: 'white', // Background color of the screen
      },
      textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start', // Align text to the left
        paddingRight: 20, // Space between text and button
      },
      text: {
        fontSize: 18,
        marginBottom: 10,
        color: 'white',
        
      },
      button3: {
        backgroundColor: 'orange',
        paddingVertical: 20,
        paddingHorizontal: 40,
        borderRadius: 10,
      },
      buttonText: {
        fontSize: 18,
       // color: 'white',
        fontWeight: 'bold',
      },


  });