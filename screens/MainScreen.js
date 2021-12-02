import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from 'react-native';
import NavBar from '../components/Navbar';

const MainScreen = () => {
  const itemsList = ['text1 ', 'text3', 'text2', 'text4'];
  const [items, setItems] = useState([]);
  const [itemText, setItemText] = useState('');
  return (
    <View style={styles.container}>
      <NavBar navBarText={'Main Screen'} />
      <View style={styles.addTodoView}>
        <TextInput
          placeholder="Add Item"
          style={styles.textInputStyle}
          value={itemText}
          onChangeText={text => {
            setItemText(text);
          }}
        />
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => {
            setItems([...items, itemText]);
            setItemText('');
          }}>
          <Text style={styles.btnText}>Add </Text>
        </TouchableOpacity>
      </View>
      {items.map((elm, ind) => (
        <View style={styles.itemCard}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 15,
            }}>
            {elm}
          </Text>
          <TouchableOpacity
            onPress={() => {
              let filtredList = items.filter((elm, index) => index != ind);
              setItems(filtredList);
            }}
            style={{
              height: 30,
              width: 30,
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#FFF', fontSize: 15, fontWeight: 'bold'}}>
              X
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    backgroundColor: '#FFF',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  addTodoView: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  textInputStyle: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    width: '85%',
  },
  addBtn: {
    height: 50,
    width: 50,
    borderRadius: 5,
    backgroundColor: '#2791e3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#FFF',
    fontWeight: '600',
  },
  itemCard: {
    width: '90%',
    height: 70,
    backgroundColor: '#e3e4e6',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 20,
  },
});
