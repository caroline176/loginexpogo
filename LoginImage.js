import {ImageBackground, Image, View} from 'react-native';
import { styles } from '../styles/stylesheet';

const imagem = { uri: 'https://static.vecteezy.com/ti/vetor-gratis/t2/1987871-abstrato-preto-listras-diagonal-fundo-gratis-vetor.jpg' }


export default function LoginImage() {
    return (
                  
    <Image
        style={[styles.img, { resizeMode: 'cover' }]}
      />

    );
}