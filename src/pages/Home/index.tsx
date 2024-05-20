
import { Alert, Button, Text, TextInput, View } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { authService } from '../../service/auth.service';

export default function HomePage() {

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const navigation = useNavigation<NavigationProp<any>>();

  async function entrar() {

    console.log(login);
    console.log(senha);

    authService.login(
      login,
      senha
    ).then((logado) => {
      if (logado) {
        navigation.navigate("UsersPage")
      } else {
        Alert.alert("Erro ao logar")
      }
    })
  }

  return (
    <View>
      <View>
        <TextInput
          style={styles.inputText}
          placeholder='Login'
          value={login}
          onChangeText={setLogin}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.inputText}
          placeholder='Senha'
          value={senha}
          onChangeText={setSenha}
        />
      </View>
      <View style={styles.button}>
        <Button title='Entrar' onPress={entrar} />
      </View>

    </View>
  );
}


