import { UPDATE_USER } from "../actionsTypes/actionsTypes";

export interface IUser {
    username: string,
    profilePicture: string
}

const updateUser = () => {
    return (dispatch: any) => {
        fetch('./data/user.json')
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: UPDATE_USER,
                    payload: data
                })
            })
    }
}

export { updateUser }