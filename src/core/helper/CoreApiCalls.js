import {API} from "../../Backend"

export const getProducts = async() =>{
    return await fetch(`${API}product/`, {method:"GET"})
    .then(response => {
        return response.json()
    })
    .catch(err => {console.log(err);})
}
