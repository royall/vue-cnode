import Vue from 'vue';
import Vuex from 'vuex';
import api from '../common/api'
import utils from "../common/utils"
import matations from './mutation-types'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLogin: !!utils.getToken(),
    accessToken: utils.getToken(),
    userInfo: utils.getUserInfo(),
    showLoginDialog:false
  },
  mutations: {
    [matations.LOGIN](state, data) {
      state.isLogin = true;
      state.accessToken = data.accessToken;
      state.userInfo = data.userInfo;
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('userInfo', JSON.stringify(data.userInfo));
    },
    [matations.LOGOUT](state) {
      state.isLogin = false;
      state.accessToken = '';
      state.userInfo = null;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userInfo');
    },
    [matations.SHOWLOGINDIALOG](state){
      state.showLoginDialog=true;
    },
    [matations.CLOSELOGINDIALOG](state){
      state.showLoginDialog=false;
    }
  },
  actions: {
    login(context, accessToken) {
      return new Promise(function (resolve, reject) {
        api.validateAccesstoken(accessToken).then(res => {
          console.log('validateAccesstoken', res);
          context.commit(matations.LOGIN, {
            accessToken: accessToken,
            userInfo: res.data
          });
          resolve();
        }).catch(() => {
          Vue.toasted.error('无效的accessToken');
          reject();
        });
      })
    }
  },
});

export default store;

