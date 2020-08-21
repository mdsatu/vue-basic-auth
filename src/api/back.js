import axios from 'axios'
const ROOT_URL = 'http://laqs.me/api';

export default {
    login(form){
        // return form.email;
        // alert(form.email);
        return form.post(`${ROOT_URL}/login`)
        // .then((result) => {
        //     return result;
        // })
        .catch(() => alert('Something Wring!'));
        // .then((result) => {
        //     return result
        // })
        // .catch(() => alert('Something wrong!'));
    },
    logout(token){
        return axios.post(`${ROOT_URL}/logout`, null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },
    fetchProfile(token){
        return axios.get(`${ROOT_URL}/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch(() => alert('Something Wring!'));
    },
    updateProfile(token, form){
        return form.post(`${ROOT_URL}/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch(() => alert('Something Wring!'));
    }
};