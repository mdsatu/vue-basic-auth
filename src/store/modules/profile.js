import api from '../../api/back'

const state = {
    profile: null
};

const getters = {
    profileInfo: state => state.profile
};

const actions = {
    async fetchProfile({ rootState, commit }){
        const { token } = rootState.auth;
        const response = await api.fetchProfile(token);
        // console.log(response);
        commit('setProfile', response.data);
    },
    async updateProfile({ rootState, commit }, form){
        const { token } = rootState.auth;
        const response = await api.updateProfile(token, form);
        commit('setProfile', response.data.data);
        // console.log(response);
    }
};

const mutations = {
    setProfile: (state, profile) => {
        state.profile = profile;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}