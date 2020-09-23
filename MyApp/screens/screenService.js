import { store } from '../stateManager/store'
import { saveProfileScreenData } from '../stateManager/profileScreenDataActions'
import * as MovieService from '../movies/moviesService'


export const searchMoviesByCategories = async (categories) => {
    const movies = await MovieService.getMovies(categories);

    store.dispatch(saveProfileScreenData(movies.movies));
}
