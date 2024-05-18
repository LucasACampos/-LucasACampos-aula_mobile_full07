import { useState } from "react"
import { Alert, FlatList, Text } from "react-native"
import { userService } from "../../service/user.service";
import { User } from "../../models/user";
import ListItem from "../../components/ListItem";

export default function UsersPage(){

    const [usuarios, setUsuarios] = useState<User[]>([]);

    async function getUsuarios() {
        await userService.getList().then(
            usersList => setUsuarios(usersList as User[])
        ).catch( error => {
            Alert.alert("Erro ao buscar usuarios")
            console.log(error)
        })
    }
    getUsuarios();

    return (
        <FlatList
            data={usuarios}
            renderItem = {({ item }) => (
                <ListItem 
                title={`${item.id} - ${item.name}`} 
                subTitle={item.username}
                />
            )}
        />
    )
}