// import api from '../../api/back'

const state = {
    token: null
};

const getters = {
    isLoggedIn: state => !!state.token
};

const actions = {

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