// const ROOT_URL = 'http://laqs.me/api';

export default {
    login(form){
        // return form.email;
        // alert(form.email);
        return form.post('http://laqs.me/api/login')
        // .then((result) => {
        //     return result;
        // })
        .catch(() => alert('Something Wring!'));
        // .then((result) => {
        //     return result
        // })
        // .catch(() => alert('Something wrong!'));
    }
};