import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_FKogE5dWkQ3FyBXG6wrsTQvjdsDqTFq0bMEM12l820uATVIKWQwhHs0EYg9aPXQd";
const url = 'https://api.thecatapi.com/v1';
const api_key = "live_FKogE5dWkQ3FyBXG6wrsTQvjdsDqTFq0bMEM12l820uATVIKWQwhHs0EYg9aPXQd";

//   Колекція порід

export function fetchBreeds() {
    return axios(`${url}/breeds?api_key=${api_key}`)
        .then(response => {
            return response.data;})
            .catch( error => {
             console.error();
        });       
};
// Інформація про кота

export function fetchCatByBreed(breedId) {
    return axios
    .get(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
        .then(response => {
             return response.data;
        });  
};