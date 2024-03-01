import { Button, View } from "react-native";
import { styles } from '../styles/stylesheet';

export default function LoginButton() {

  pressButton = () => {
    alert("Você pressionou o botão!")
  }

    return (
        <View style={styles.LoginButton}>
      
        <Button
          style={{ backgroundColor: 'white' }}
          onPress={pressButton}
          title='LOGIN'
          color='gray'
        />
        </View>

    );  
}