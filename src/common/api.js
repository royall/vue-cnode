import axios from 'axios';
import Vue from 'vue';


let loading;
axios.interceptors.request.use(function (config) {
  loading=Vue.toasted.global.loading();
  // Do something before request is sent
  return config;
}, function (error) {
  loading.goAway(500);
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  loading.goAway(500);
  // Do something with response data
  return response;
}, function (error) {
  loading.goAway(500);
  // Do something with response error
  return Promise.reject(error);
});

const baseUrl = 'https://cnodejs.org/api/v1';
export default {
  getTopics(opts) {
    return axios.get(baseUrl + '/topics', {
      params: opts
    });
  },
  getTopic(id, token) {
    return axios.get(baseUrl + '/topic/' + id, {
      params: {
        accesstoken: token
      }
    });
  },
  getUser(loginname) {
    return axios.get(baseUrl + '/user/' + loginname);
  },
  postTopics(opts) {
    return axios.post(baseUrl + '/topics/', {
      params: opts
    });
  },
  updateTopics(opts) {
    return axios.post(baseUrl + '/topics/update', {
      params: opts
    });
  },
  validateAccesstoken(accesstoken) {
    return axios.post(baseUrl + '/accesstoken', {
      accesstoken: accesstoken
    });
  },
  collect(opts) {
    return axios.post(baseUrl + '/topic_collect/collect', opts);
  },
  unCollect(opts) {
    return axios.post(baseUrl + '/topic_collect/de_collect', opts);
  },
  getCollect(loginname) {
    return axios.get(baseUrl + '/topic_collect/' + loginname);
  },
  getMessageCount(accesstoken) {
    return axios.get(baseUrl + '/message/count', {
      params: {
        accesstoken: accesstoken
      }
    });
  },


}
