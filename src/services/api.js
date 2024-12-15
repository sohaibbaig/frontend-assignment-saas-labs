import axios from 'axios';

const getRequest = (endpoint) => {
    return new Promise((resolve, reject) => {
        axios.get(endpoint)
        .then(function (response) {
            resolve(response.data);
        })
        .catch(function (error) {
            reject(error);
        })
    });   
}

export default getRequest;