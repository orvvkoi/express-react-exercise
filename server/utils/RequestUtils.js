import axios from 'axios';

const axiosError = (error) => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        throw new Error(error.response);
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
        throw new Error(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
        throw new Error(error.message);
    }
};

const get = async (url) => {
    const response = await axios
        .get(url)
        .then((result) => result.data)
        .catch(axiosError);

    return response;
};

const post = async (url, data) => {
    try {
        const response = await axios
            .post(url, data)
            .then((result) => result.data)
            .catch(axiosError);

        return response;
    } catch (error) {
        console.log(error);
    }

    return null;
};

const request = async (opts) => {
    const response = await axios
        .request(opts)
        .then((result) => result.data)
        .catch(axiosError);
    return response;
};

const all = async (arr) => {
    const response = await axios.all(arr).catch(axiosError);

    return response;
};

const RequestUtils = {
    get,
    post,
    request,
    all
};

export default RequestUtils;
