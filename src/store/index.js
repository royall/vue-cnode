import Vue from 'vue';
import Vuex from 'vuex';
import api from '../common/api'
import utils from "../common/utils"
import {mutations} from '../common/constants'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLogin: !!utils.getToken(),
    accessToken: utils.getToken(),
    userInfo: utils.getUserInfo(),
    showLoginDialog: false
  },
  mutations: {
    [mutations.LOGIN](state, data) {
      state.isLogin = true;
      state.accessToken = data.accessToken;
      state.userInfo = data.userInfo;
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('userInfo', JSON.stringify(data.userInfo));
    },
    [mutations.LOGOUT](state) {
      state.isLogin = false;
      state.accessToken = '';
      state.userInfo = null;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userInfo');
    },
    [mutations.SHOWLOGINDIALOG](state) {
      state.showLoginDialog = true;
    },
    [mutations.CLOSELOGINDIALOG](state) {
      state.showLoginDialog = false;
    }
  },
  actions: {
    async login(context, accessToken) {
      try {
        const res = await api.validateAccesstoken(accessToken);
        console.log('validateAccesstoken', res);
        context.commit(mutations.LOGIN, {
          accessToken: accessToken,
          userInfo: res.data
        });
        return res;
      } catch (e) {
        Vue.toasted.error('无效的accessToken');
      }
    }
  },
});

export default store;

