import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StyleSheet } from 'react-native';

const ProfileStyles = StyleSheet.create({
    body: {
      backgroundColor: Colors.white,
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
      marginTop: 8,
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
    checkbox: {
      alignSelf: "center",
    },
  });

  export default ProfileStyles;