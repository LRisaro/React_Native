import axios from 'axios'
import * as AsynStore from '../async-storage/asyncStore'
const API_MOVIES = 'https://desafio-back-pelis.herokuapp.com/movies'


export const getMovies = async (filtro) => {
    try {
        const backToken = await AsynStore.getObjectData('backToken');
        const AuthStr = 'Bearer '.concat(backToken.backendUserToken);
        const response = await axios.get(API_MOVIES, { headers: { Authorization: AuthStr } })

        if (filtro) {
            const movies = [];
            console.log('entre a filtrar');
            console.log(filtro);
            filtro.forEach(element => {
                console.log('entre a filtrar');
                console.log(element);
                const aux = response.data.movies.filter((movie) => movie.type === element);
                movies = [...movies, aux]
                console.log(movies);
            });
            
            return movies;
        }
        
        return response.data
    } catch{
        console.log('Error en getMovies')
    }
}

