import {View, ImageBackground} from 'react-native';
import { styles } from '../styles/stylesheet';
import LoginText from './LoginText';
import LoginImage from './LoginImage';
import LoginButton from './LoginButton';
import LoginInput from './LoginInput';

export default function LoginImageBackground () {
    return (

        <ImageBackground source={require('../assets/images/sorriso.jpg')} 
        resizeMode='cover'>
            <LoginText />
            <LoginImage />
            <LoginButton />
            <LoginInput />
        </ImageBackground>
        
    );

}
