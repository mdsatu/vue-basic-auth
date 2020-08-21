import api from '../../api/back'
import { router } from '../../main'

const state = {
    token: window.localStorage.getItem('back_token')
};

const getters = {
    isLoggedIn: state => !!state.token
};

const actions = {
    async loginSubmit ({ commit }, form) {
        const response = await api.login(form);
        if ((response.data.token)){
            commit('setToken', response.data.token);
            window.localStorage.setItem('back_token', response.data.token);
            router.push('/profile');
        }else{
            alert('Email or password wrong!');
        }

        // console.log(response);
        // alert(form.email);
    },
    // finalizeLogin: ({ commit }, token) => {
    //     commit('setToken', token);
    //     window.localStorage.setItem('back_token', token);
    //     router.push('/profile');
    // },
    async logout({ state, commit }) {
        // Logout Request
        const response = await api.logout(state.token);

        if (response.status){
            commit('setToken', null);
            window.localStorage.removeItem('back_token');
            router.push('/');
        }else{
            alert('Something wrong!');
        }
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};