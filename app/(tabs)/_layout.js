import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' ,tabBarStyle: { backgroundColor: 'black' },}}>
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="shopping-cart" color={color} />,
        }}
      />
       <Tabs.Screen
        name="favourite"
        options={{
          title: 'favourite',
          tabBarIcon: ({ color }) => <MaterialIcons name="favorite" size={24} color={color} />,
        }}
      />
       <Tabs.Screen
        name="notification"
        options={{
          title: 'notification',
          
          tabBarIcon: ({ color }) => <Ionicons name="notifications" size={24} color={color}  />,
        }}
      />
    </Tabs>
  );
}
