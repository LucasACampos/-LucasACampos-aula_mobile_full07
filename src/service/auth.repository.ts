import { User } from "../models/user"
import * as SecureStore from 'expo-secure-store'

class AuthRepository {

    private readonly storeKey = 'LOGGED_USER'

    public getLoggedUser() {
        const json = SecureStore.getItem(this.storeKey)
        if (json) return JSON.parse(json) as User
        return null
    }

    public setLoggedUser(user: User) {
        SecureStore.setItem(this.storeKey, JSON.stringify(user))
    }

    public removeLoggedUser() {
        SecureStore.deleteItemAsync(this.storeKey)
    }

    public logOut() {
        authRepository.removeLoggedUser()
    }

}

export const authRepository = new AuthRepository()