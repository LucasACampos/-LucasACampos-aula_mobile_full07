import { Alert, Button, Text, TextInput } from "react-native";
import styles from "./styles";
import { useState } from "react";
import { userService } from "../../../service/user.service";
import { NavigationProp, useNavigation} from "@react-navigation/native";
import { User } from "../../../models/user";

export default function UserNew(){

    const navigation = useNavigation<NavigationProp<any>>();

    const [nome, setNome] = useState("");
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConfirmacao, setSenhaConfimacao] = useState("");
    

    function salvarModificacoes(){

        if(senha !== senhaConfirmacao){
            Alert.alert("Senhas não são iguais");
            return;
        }

        userService.create(
            {
                username: login,
                name: nome,
                password: senha
            } as User
        ).then((resultado) => {

            if(resultado){
                navigation.navigate("UsersPage");
            }else{
                Alert.alert("Erro");
            }

        });
    }

    return(
        <>
            <TextInput 
                style={styles.inputText}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={styles.inputText}
                placeholder="Login"
                value={login}
                onChangeText={setLogin}
            />
            <TextInput
                style={styles.inputText}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
            />
            <TextInput
                style={styles.inputText}
                placeholder="Confirmar Senha"
                value={senhaConfirmacao}
                onChangeText={setSenhaConfimacao}
            />
            <Button 
                title="Salvar"
                onPress={salvarModificacoes}
            />
        </>
    )

}