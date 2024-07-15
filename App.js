import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image source={require('./image/background.png')} style={styles.background} />
      <View style={styles.overlay}>
        <Image source={require('./image/iconcarrot.png')} style={styles.icon} />
        <Text style={styles.title}>Welcome to our store</Text>
        <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./image/background2.png')} style={styles2.background2} />
      <View style={styles2.overlay}>
        <Text style={styles2.loginTitle}>Get your groceries with nectar</Text>
        <View style={styles2.phoneContainer}>
          <Image source={require('./image/iconflag.png')} style={styles2.iconFlag} />
          <Text style={styles2.phoneCode}>+880</Text>
          <TextInput style={styles2.phoneInput} keyboardType="phone-pad" />
        </View>
        <Text style={styles2.orText}>Or connect with social media</Text>
        <TouchableOpacity style={styles2.socialButton1}>
          <Image source={require('./image/icongoogle.png')} style={styles2.socialIcon} />
          <Text style={styles2.socialButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles2.socialButton}>
          <Image source={require('./image/iconfacebook.png')} style={styles2.socialIcon} />
          <Text style={styles2.socialButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#fff',
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  background2: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    transform: [{ rotate: '-145deg' }],
  },
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    width: 50,
    height: 50,
    top: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 48,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    top: 150,
    left: 'auto',
    width: 253,
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    top: 150,
    left: 'auto',
  },
  button: {
    backgroundColor: '#53B175',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 19,
    width: 353,
    height: 67,
    justifyContent: 'center',
    alignItems: 'center',
    top: 150,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
 
});



const styles2 = StyleSheet.create({
  background2: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    top:-50,
    transform: [{ rotate: '-145deg' }],
  },
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    top:-200,
  },

  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
    width: 250,
    alignSelf: 'flex-start', 
    textAlign: 'left'
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconFlag: {
    width: 24,
    height: 16,
    resizeMode: 'contain',
    marginRight: 8,
  },
  phoneCode: {
    fontSize: 18,
    color: '#000',
    marginRight: 10,
  },
  phoneInput: {
    fontSize: 18,
    color: '#828282',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    flex: 1,
  },
  orText: {
    fontSize: 14,
    color: '#828282',
    marginVertical: 20,
    top: -10,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A66AC',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: '80%',
    marginBottom: 10,
    borderRadius: 19,
    width: 353,
    height: 67,
    top: -10,
  },
  socialButton1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5383EC',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: '80%',
    marginBottom: 10,
    borderRadius: 19,
    width: 353,
    height: 67,
    top: -10,
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: 'contain',
  },
  socialButtonText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 30,
  },

})
export default App;
