import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Card = ({name, username, email, address, phone}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>Name: {name}</Text>
      <Text style={styles.User}>Username: {username}</Text>
      <Text style={styles.email}>Email: {email}</Text>
      <Text style={styles.email}>Address: {address}</Text>
      <Text style={styles.email}>Phone: {phone}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    paddingLeft: 16,
    paddingVertical: 12,
  },
  text: {
    fontSize: 18,
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: 'grey',
    marginTop: 10,
  },
  image: {
    height: 150,
    width: 150,
    marginTop: 10,
  },
});