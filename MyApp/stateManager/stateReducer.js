import { profileScreenDataActionsConstants } from './profileScreenDataActionsConstants'

const initialData = {
    movies: []
}

export const stateReducer = async (state = initialData, action) => {
    switch (action.type) {

        case profileScreenDataActionsConstants.saveProfileScreenData:
            return {
                movies: action.movies
            }

        default:
            return state;
    }
}