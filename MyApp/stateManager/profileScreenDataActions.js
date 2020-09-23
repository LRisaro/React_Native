import {profileScreenDataActionsConstants} from './profileScreenDataActionsConstants'

export const saveProfileScreenData = (movies) => {
    return {
        type: profileScreenDataActionsConstants.saveProfileScreenData,
        movies
    }
}
