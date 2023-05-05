import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const ScreenComponent = () => {
  return <View style={styles.container}>
      <Icon name="lock" type="font-awesome" size={100} color="#000" />
      <Text style={styles.title}>Unlock the potential of Open Finance</Text>
      <Text style={styles.description}>Connect your app to your users' financial data easily and securely through Basiq's single API. Access a variety of data sources including Open Banking to build engaging experiences your users will love.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 40
  },
  button: {
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default ScreenComponent;