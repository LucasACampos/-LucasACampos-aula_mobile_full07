import { useEffect, useState } from "react"
import { Alert, Button, FlatList, Text, View } from "react-native"
import { userService } from "../../service/user.service";
import { User } from "../../models/user";
import ListItem from "../../components/ListItem";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { authRepository } from "../../service/auth.repository";
import styles from "./styles";

export default function UsersPage() {

    const navigator = useNavigation<NavigationProp<any>>()

    useEffect(() =>{
        navigator.setOptions({
            title: "Usuários",
            headerRight: () => (
                <>
                    <View style={styles.headerButton}>
                    <Button
                            title="Add"
                            onPress={() => {
                                navigator.navigate("UserNew");
                            }}
                        />
                    </View>
                    <View>
                    <Button
                            title="Sair"
                            onPress={() => {
                                authRepository.logOut();
                                navigator.navigate("Home");
                            }}
                        />
                    </View>
    
                </>
            )
        })
    }, [])

    const [usuarios, setUsuarios] = useState<User[]>([]);

    async function getUsuarios() {
        await userService.getList().then(
            usersList => setUsuarios(usersList as User[])
        ).catch(error => {
            Alert.alert("Erro ao buscar usuarios")
            console.log(error)
        })
    }

    getUsuarios(); //Não pode colocar em um useEfect vazio pois não recarrega ao voltar da pagina de criação de usuarios
    
    function openUserDetails(id: number) {
        navigator.navigate("UserDetails", { userId: id })
    }

    
    return (
        <FlatList
            data={usuarios}
            renderItem={({ item }) => (
                <ListItem
                    title={`${item.id} - ${item.name}`}
                    subTitle={item.username}
                    onPress={() => { openUserDetails(item.id!) }}
                />
            )}
        />
    )
}