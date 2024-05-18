import { authRepository } from './auth.repository'
import { User } from '../models/user'
import axios from 'axios'

class AuthService {

    private readonly api = axios.create({ baseURL: 'http://10.0.2.2:3030/auth' })

    public async login(username: string, password: string) {
        try {
            const response = await this.api.post('login', { username, password })

            const logged: User = response.data

            if (logged && logged.token) {
                authRepository.setLoggedUser(logged)
                return true
            } else {
                return false
            }
        } catch (error) {
            console.log("Error:")
            console.log(error)
            return false
        }
    }

}

export const authService = new AuthService()
