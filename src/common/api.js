import axios from 'axios';

let baseUrl='https://cnodejs.org/api/v1';

axios.interceptors.request.use(function (config) {
  console.log('loading start');
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  console.log('loading end');
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default {
  getTopics(opts){
    return axios.get(baseUrl+'/topics',{
      params: opts
    });
  },
  getTopic(id){
    return axios.get(baseUrl+'/topic/'+id);
  },
  getUser(loginname){
    return axios.get(baseUrl+'/user/'+loginname);
  },
  postTopics(opts){
    return axios.post(baseUrl+'/topics/',{
      params: opts
    });
  },
  updateTopics(opts){
    return axios.post(baseUrl+'/topics/update',{
      params: opts
    });
  },


}
