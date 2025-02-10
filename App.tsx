// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import { Button, Provider as PaperProvider } from 'react-native-paper';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// const Dashboard = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Button mode="contained" onPress={() => navigation.navigate('Customer')}>Customer</Button>
//       <Button mode="contained" onPress={() => navigation.navigate('Item')}>Item</Button>
//       <Button mode="contained" onPress={() => navigation.navigate('Order')}>Order</Button>
//     </View>
//   );
// };

// const Customer = () => <View style={styles.page}><Button>Customer Page</Button></View>;
// const Item = () => <View style={styles.page}><Button>Item Page</Button></View>;
// const Order = () => <View style={styles.page}><Button>Order Page</Button></View>;

// export default function App() {
//   return (
//     <PaperProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Dashboard">
//           <Stack.Screen name="Dashboard" component={Dashboard} />
//           <Stack.Screen name="Customer" component={Customer} />
//           <Stack.Screen name="Item" component={Item} />
//           <Stack.Screen name="Order" component={Order} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </PaperProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 },
//   page: { flex: 1, justifyContent: 'center', alignItems: 'center' }
// });

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Dashboard from './Dashboard';
import Customer from './Customer';
import Item from './Item';
import Order from './Order';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashboard">
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Customer" component={Customer} />
          <Stack.Screen name="Item" component={Item} />
          <Stack.Screen name="Order" component={Order} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
} 
