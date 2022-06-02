import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign'

const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView>
        <View>
          <Text>new app</Text>
          <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
            Press me
          </Button>
          <Icon name='stepforward' size={50} />

        </View>
      </SafeAreaView>
    </PaperProvider>
  )
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
