import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useSelector, useDispatch } from 'react-redux'
import { ListItem, Avatar } from 'react-native-elements'

const ScreenMovies = () => {

  const styles = StyleSheet.create({
    body: {
      backgroundColor: '#67baf6',
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
  });


  const moviesData = useSelector((state) => state);
  const dispatch = useDispatch();
  const [moviesSearched, setMoviesSearched] = useState([]);

  useEffect(() => {
    setDataMovies();
  },[dispatch])

  const setDataMovies = async () => {
    setMoviesSearched(moviesData._W.movies);
  }
  return (
    <>
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Peliculas{'\n'}</Text>
          </View>
        </View>

        <ScrollView style={{ width: '100%' }}>
          <View>
            {
              moviesSearched.map((l, i) => (
                <ListItem key={i} bottomDivider>
                  <Avatar source={{ uri: l.image }} />
                  <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    <ListItem.Subtitle>Categoria: {l.type}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              ))
            }
          </View>
        </ScrollView>

      </SafeAreaView>
    </>
  );
};

export default ScreenMovies;