import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const Order = () => (
  <View style={styles.page}>
    <Button>Order Page</Button>
  </View>
);

const styles = StyleSheet.create({
  page: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default Order;