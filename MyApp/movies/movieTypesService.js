import axios from 'axios'
import * as AsynStore from '../async-storage/asyncStore'
const API_MOVIE_TYPES = 'https://desafio-back-pelis.herokuapp.com/movieTypes'


export const getMovieTypes = async () => {
    try {
        const backToken = await AsynStore.getObjectData('backToken');
        const AuthStr = 'Bearer '.concat(backToken.backendUserToken);
        const response = await axios.get(API_MOVIE_TYPES, { headers: { Authorization: AuthStr } })
        
        return response.data;
    } catch{
        console.log('Error en getMovieTypes')
    }
}