import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Button, ScrollView, StyleSheet, TouchableHighlight, FlatList, Alert } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import * as GoogleService from '../auth/googleService'
import { Input } from 'react-native-elements';
import { useSelector } from 'react-redux'
import CheckBox from '@react-native-community/checkbox';
import * as ScreenService from '../screens/screenService'
import * as MovieTypesService from '../movies/movieTypesService'

const ScreenProfile = ({ navigation }) => {

  const styles = StyleSheet.create({
    body: {
      backgroundColor: '#f69b31',
    },
    sectionContainer: {
      flexDirection: 'row',
      flex: 1,
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      alignSelf: 'flex-start',
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginLeft: 12,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    button: {
      flexDirection: 'row',
      alignSelf: 'flex-end',
    },
    head: {
      height: 40,
      backgroundColor: '#f1f8ff'
    },
    text: {
      margin: 6
    },
    container: {
      flex: 1,
      padding: 16,
      paddingTop: 30,
      backgroundColor: '#fff',
      margin: 6
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    flatList: {
      flex: 1,
      paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    }
  });

  const [categoriesSelected, setCategoriesSelected] = useState([]);
  const [arrayCategories, setArrayCategories] = useState([]);

  const [screenInfo, setScreenInfo] = useState({
    name: '',
    mail: '',
  })

  useEffect(() => {
    getArrayCategories();
    getScreenInfo();
  }, [])

  const handleLogout = async () => {
    try {
      await GoogleService.signOut();
      navigation.navigate('Index');
    }
    catch {
      console.log('error cuando me desloggee')
    }
  }

  const addCategorie = (item) => {
    if (!categoriesSelected.includes(item)) {
      setCategoriesSelected([...categoriesSelected, item]);
    }
  }

  const deleteCategorie = (item) => {
    const index = categoriesSelected.indexOf(item);
    const array = [...categoriesSelected];

    if (index != -1) {
      array.splice(index, 1);
      setCategoriesSelected(array);
    }

    index = screenInfo.moviesCategories.indexOf(item);
    screenInfo.moviesCategories[index].checked = false;

    setScreenInfo(screenInfo);
  }

  const handleSearchMovies = async () => {
    try {
      await ScreenService.searchMoviesByCategories(categoriesSelected);
      navigation.navigate('Movies');
    }
    catch {
      Alert.alert("Error en la busqueda", "Ocurrio un error al realizar la busqueda de las peliculas, por favor vuelva a intentarlo.")
    }
  }

  const getScreenInfo = async () => {
    try {
      const userInfo = await GoogleService.getCurrentUser();

      setScreenInfo({
        name: userInfo.user.name,
        mail: userInfo.user.email,
      })
    }
    catch
    {
      Alert.alert('Error en info del usuario');
    }
  }

  const getArrayCategories = async () => {
    const moviesCategories = await MovieTypesService.getMovieTypes();

    moviesCategories.movieTypes.forEach(element => {
      console.log(element);
      setArrayCategories([{
        category: element,
        checked: false
      }])
    });

    console.log(arrayCategories);
  }

  return (
    <>
      <SafeAreaView>
        <ScrollView>

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <View style={{ alignSelf: 'flex-start' }}>
                <Text style={styles.sectionTitle}>Perfil{'\n'}</Text>
              </View>
            </View>
          </View>
          <Text>{'\n'}</Text>
          <View style={{ alignSelf: 'flex-end', marginRight: 12 }}>
            <Button
              title="Log Out"
              color="#FF0000"
              onPress={handleLogout}
            />
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Datos del usuario{'\n'}</Text>
          </View>

          <Input
            label='Nombre y apellido'
            disabled
            value={screenInfo.name}
          />

          <Input
            label='Mail'
            disabled
            value={screenInfo.mail}
          />


          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{'\n'}Categorias de peliculas</Text>
          </View>
          <Text style={styles.sectionDescription}>{'\n'}Seleccione las categorias que le interesan{'\n'}</Text>

          <SafeAreaView>
            <FlatList
              data={arrayCategories}
              renderItem={({ item }) => (
                <View style={styles.checkboxContainer}>
                  <CheckBox value={item.checked} onValueChange={(value) => {
                    if (value) {
                      addCategorie(item.category);
                    }
                    else {
                      deleteCategorie(item.category);
                    };
                  }
                  } />
                  <Text style={{ fontSize: 20 }} >{item.category}</Text>
                </View>
              )}
            />
            <View style={{ alignSelf: 'flex-start', marginRight: 12 }}>
              <Button
                title="Buscar peliculas"
                color="#0000FF"
                onPress={handleSearchMovies}
              />
            </View>
          </SafeAreaView>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ScreenProfile;