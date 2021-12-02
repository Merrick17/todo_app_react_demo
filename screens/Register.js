import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import NavBar from '../components/Navbar';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    if (email == 'safwen.benfredj@gmail.com' && password == '123456') {
      Alert.alert('Hello Safwen');
    } else {
      Alert.alert('Wrong Email or password');
    }
  };
  return (
    <View style={styles.container}>
      <NavBar navBarText={'Inscription'} />
      <View style={styles.textContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={email}
          onChangeText={text => {
            setEmail(text);
          }}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="password"
          secureTextEntry={true}
          value={password}
          onChangeText={text => {
            setPassword(text);
          }}
        />
        <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    backgroundColor: '#FFF',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  textContainer: {
    width: 400,
    height: 450,
    backgroundColor: '#e3e4e6',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 20,

    position: 'absolute',
    bottom: 0,
  },
  inputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    width: '90%',
    height: 60,
    marginBottom: 10,
    borderRadius: 10,
  },
  loginBtn: {
    width: '90%',
    height: 65,
    backgroundColor: '#2791e3',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#FFF',
    fontSize: 15,
  },
});
