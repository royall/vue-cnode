import axios from 'axios';

let baseUrl='https://cnodejs.org/api/v1';

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
