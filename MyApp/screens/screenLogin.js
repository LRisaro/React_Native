import React from 'react';
import { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import * as GoogleService from '../auth/googleService'
import { GoogleSigninButton, GoogleSignin } from '@react-native-community/google-signin';
import { useState } from 'react';

const ScreenLogin = ({ navigation }) => {

  const styles = StyleSheet.create({
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    }
  });


  GoogleSignin.configure({
    webClientId: '868779799459-uktpa0gpvv8vm3vb85ml7rq7v2o3ufau.apps.googleusercontent.com'
  })

  const [logingError, setLoginError] = useState(false)

  const handleLogin = async () => {
    try {
      await GoogleService.signIn();
      setLoginError(false);
      navigation.navigate('Profile');
    }
    catch
    {
      await GoogleService.signOut();
      setLoginError(true)
      console.error("error en signIn.");
    };

  }

  return (
    <>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <View>
          < View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Bienvenido!{"\n"}</Text>
            </View>
          </View>
          <Text>{'\n'}</Text>
          <View style={{ alignItems: 'center' }}>
            <GoogleSigninButton
              style={{ width: 192, height: 48 }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={handleLogin} />
          </View>
        </View>
        <View>
          {logingError && Alert.alert("Login error", "Intentelo de nuevo mas tarde.")}
        </View>
      </SafeAreaView>
    </>
  );
};

export default ScreenLogin;
