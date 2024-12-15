import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  useColorScheme,
} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <View  style={styles.container}>
        <Text style={isDarkMode?styles.whiteText :styles.blackText}>
          Hello
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',// works left to right
    justifyContent:'center' // work on top to bottom
  },

  whiteText: {
    color: 'black',
  },
  blackText: {
    color: 'black',
  },
});
export default AppPro;
