import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, DrawerLayoutAndroidComponent, ScrollView} from 'react-native';
import TextInput from './textInput';
import Button from './button'
import Gap from './gap';

const App = () => {

  const [welcome, setWelcome] = useState('Registration')
  const [namaLengkap, setNamaLengkap] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [alamat, setAlamat] = useState('')
  const [telepon, setTelepon] = useState('')

  const handleSubmit =()=>{
    const data ={
      namaLengkap: namaLengkap,
      username: username,
      email: email,
      alamat: alamat,
      telepon:telepon,
    }
    console.log(data)
  }

  return (
      <ScrollView>
            <View style={styles.container}>
            <Text style={styles.title}>{welcome}</Text>
            <Gap height={40} />
            <TextInput label="Name" placeholder="Masukan nama lengkap anda" value ={namaLengkap} onChangeText ={(e)=>setNamaLengkap(e)} secureTextEntry ={true}/>
            <Gap height={20} />
            <TextInput label="Username" placeholder="Masukan username anda" value ={username} onChangeText ={(e)=>setUsername(e)} secureTextEntry ={true}/>
            <Gap height={20} />
            <TextInput label="Email" placeholder="Masukan email anda" value ={email} onChangeText ={(e)=>setEmail(e)} secureTextEntry ={true}/>
            <Gap height={20} />
            <TextInput label="Address" placeholder="Masukan alamat anda" value ={alamat} onChangeText ={(e)=>setAlamat(e)} secureTextEntry ={true}/>
            <Gap height={20} />
            <TextInput label="Phone Number" placeholder="Masukan nomor telepon anda" value ={telepon} onChangeText ={(e)=>setTelepon(e)} secureTextEntry ={true} keyboardType="numeric"/>
            <Gap height={29} />
            <Button  label="Register" onsubmit ={()=> handleSubmit()} />
            </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 25,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
  },
  button:{
    marginTop: 10,
    backgroundColor: '#C238CE',
    borderRadius: 7,
  },
  TextButton:{
    paddingVertical: 15,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  }

});

export default App;