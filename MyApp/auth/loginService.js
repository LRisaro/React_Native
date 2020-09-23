import axios from 'axios'
import * as AsynStore from '../async-storage/asyncStore'
import * as ScreenService from '../screens/screenService'
const API_MOVIES = 'https://desafio-back-pelis.herokuapp.com/login'


export const login = async (token, mail) => {
    try{
        const response = await axios.post(API_MOVIES, { tokenGoogle: token, emailGoogle: mail});
        await AsynStore.storeObjectData('backToken', response.data)
        await ScreenService.setProfileScreenData();
    } catch{
        console.log('Error en login')
    }
}