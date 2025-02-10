import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, DataTable, Button } from 'react-native-paper';

const Customer = () => {
  return (
    <View style={styles.container}>
      <TextInput label="Name" style={styles.input} />
      <TextInput label="Age" style={styles.input} keyboardType="numeric" />
      <TextInput label="Address" style={styles.input} />
      <TextInput label="Tel" style={styles.input} keyboardType="phone-pad" />
      
      <View style={styles.buttonContainer}>
        <Button mode="contained" style={[styles.button, styles.addButton]}>Add</Button>
        <Button mode="contained" style={[styles.button, styles.updateButton]}>Update</Button>
        <Button mode="contained" style={[styles.button, styles.deleteButton]}>Delete</Button>
      </View>
      
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Age</DataTable.Title>
          <DataTable.Title>Address</DataTable.Title>
          <DataTable.Title>Tel</DataTable.Title>
        </DataTable.Header>
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { marginBottom: 10 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
  button: { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, minWidth: 80 },
  addButton: { backgroundColor: 'green' },
  updateButton: { backgroundColor: 'blue' },
  deleteButton: { backgroundColor: 'red' }
});

export default Customer;

// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { Button, TextInput, DataTable } from 'react-native-paper';

// const Customer = () => {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [address, setAddress] = useState('');
//   const [tel, setTel] = useState('');
//   const [customers, setCustomers] = useState([]);
//   const [editingIndex, setEditingIndex] = useState(null);

//   const handleAddOrUpdate = () => {
//     if (editingIndex !== null) {
//       const updatedCustomers = [...customers];
//       updatedCustomers[editingIndex] = { name, age, address, tel };
//       setCustomers(updatedCustomers);
//       setEditingIndex(null);
//     } else {
//       setCustomers([...customers, { name, age, address, tel }]);
//     }
//     setName('');
//     setAge('');
//     setAddress('');
//     setTel('');
//   };

//   const handleEdit = (index) => {
//     const customer = customers[index];
//     setName(customer.name);
//     setAge(customer.age);
//     setAddress(customer.address);
//     setTel(customer.tel);
//     setEditingIndex(index);
//   };

//   const handleDelete = (index) => {
//     setCustomers(customers.filter((_, i) => i !== index));
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput label="Name" value={name} onChangeText={setName} style={styles.input} />
//       <TextInput label="Age" value={age} onChangeText={setAge} style={styles.input} keyboardType="numeric" />
//       <TextInput label="Address" value={address} onChangeText={setAddress} style={styles.input} />
//       <TextInput label="Tel" value={tel} onChangeText={setTel} style={styles.input} keyboardType="phone-pad" />
//       <Button mode="contained" onPress={handleAddOrUpdate} style={styles.button}>
//         {editingIndex !== null ? 'Update' : 'Add'}
//       </Button>
      
//       <DataTable>
//         <DataTable.Header>
//           <DataTable.Title textStyle={{ color: 'black' }}>Name</DataTable.Title>
//           <DataTable.Title textStyle={{ color: 'black' }}>Age</DataTable.Title>
//           <DataTable.Title textStyle={{ color: 'black' }}>Address</DataTable.Title>
//           <DataTable.Title textStyle={{ color: 'black' }}>Tel</DataTable.Title>
//           <DataTable.Title textStyle={{ color: 'black' }}>Actions</DataTable.Title>
//         </DataTable.Header>
//         {customers.map((customer, index) => (
//           <DataTable.Row key={index}>
//             <DataTable.Cell textStyle={{ color: 'black' }}>{customer.name}</DataTable.Cell>
//             <DataTable.Cell textStyle={{ color: 'black' }}>{customer.age}</DataTable.Cell>
//             <DataTable.Cell textStyle={{ color: 'black' }}>{customer.address}</DataTable.Cell>
//             <DataTable.Cell textStyle={{ color: 'black' }}>{customer.tel}</DataTable.Cell>
//             <DataTable.Cell>
//               <Button onPress={() => handleEdit(index)}>Edit</Button>
//               <Button onPress={() => handleDelete(index)}>Delete</Button>
//             </DataTable.Cell>
//           </DataTable.Row>
//         ))}
//       </DataTable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   input: { marginBottom: 10 },
//   button: { marginBottom: 10 }
// });

// export default Customer;
