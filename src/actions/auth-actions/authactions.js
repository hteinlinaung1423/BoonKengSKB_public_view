const axios = require('axios');

export const login = async (loginViewModel) => {

    return await axios({
        method: 'post',
        url: `${process.env.WEB_API}auth/login`,
        data: loginViewModel,
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            //handle error
            console.error(error);
            return error.response.status;
        });
};

export const register = async (loginViewModel) => {

    return await axios({
        method: 'post',
        url: `${process.env.WEB_API}auth/register`,
        data: loginViewModel,
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            //handle error
            console.error(error);
            return error.response.status;
        });
};