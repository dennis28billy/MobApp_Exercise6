import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Card = ({name, username, email, addressStreet, addressSuite, addressCity, addressZipCode, phone}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}><Text style = {{fontWeight: "bold"}}>Name: </Text> {name}</Text>
      <Text style={styles.text}><Text style = {{fontWeight: "bold"}}>Username: </Text>{username}</Text>
      <Text style={styles.text}><Text style = {{fontWeight: "bold"}}>Email: </Text>{email}</Text>
      <Text style={styles.text}><Text style = {{fontWeight: "bold"}}>Address: </Text> {addressStreet} {addressSuite} {addressCity} {addressZipCode}</Text>
      <Text style={styles.text}><Text style = {{fontWeight: "bold"}}>Phone: </Text> {phone}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginTop: 44,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    paddingLeft: 26,
    paddingVertical: 13,
  },
  text: {
    fontSize: 18,
    color: 'black',
  }
});