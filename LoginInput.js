import {View, TextInput,} from 'react-native';
import { styles } from '../styles/stylesheet';
export default function LoginInput () {
    return (
      <View>
        <TextInput style={styles.LoginInput}
        placeholder='Digite seu e-mail'
        inputMode='email'
        secureTextEntry={true}
      />
      <TextInput style={styles.LoginInput}
        placeholder='Digite sua senha'
        inputMode='numeric'
        secureTextEntry={true}
      />
      </View>
    )
}