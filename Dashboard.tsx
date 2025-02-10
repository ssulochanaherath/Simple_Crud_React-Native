import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={() => navigation.navigate('Customer')}>Customer</Button>
      <Button mode="contained" onPress={() => navigation.navigate('Item')}>Item</Button>
      <Button mode="contained" onPress={() => navigation.navigate('Order')}>Order</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }
});

export default Dashboard;