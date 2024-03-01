import { View, Text } from 'react-native';
import { styles } from './src/styles/stylesheet.js';
import Login from './src/pages/Login.js';

export default function App() {
  return(
    <View style={styles.container}>
        <Login />
    </View>
  );
}