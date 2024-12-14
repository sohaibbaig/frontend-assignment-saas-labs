import axios from 'axios';
import offline from './offline.json'

const getRequest = (endpoint) => {
    return new Promise((resolve, reject) => {
        axios.get(endpoint)
        .then(function (response) {
            resolve(response.data);
        })
        .catch(function (error) {
            resolve(offline);
            // reject(error);
        })
    });   
}

export default getRequest;