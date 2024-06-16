a// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Header, Icon } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.headerContainer}
        leftComponent={<Icon name="menu" color="#fff" onPress={() => {}} />}
        centerComponent={<Text style={styles.title}><Text style={styles.yellowText}>Event</Text><Text style={styles.whiteText}>Wise</Text></Text>}
        rightComponent={
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require('../assets/images/profile-pic.jpg')}
              style={styles.profilePic}
            />
          </TouchableOpacity>
        }
      />
      <View style={styles.content}>
        <Text style={styles.text}>Home Screen Content</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  headerContainer: {
    backgroundColor: '#000',
    borderBottomWidth: 0.5,
    borderBottomColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  yellowText: {
    color: '#FFD700',
  },
  whiteText: {
    color: '#FFF',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default HomeScreen;
