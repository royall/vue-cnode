export default {
  getToken(){
    return localStorage.getItem('accessToken')||'';
  },
  getUserInfo(){
    let userInfo=localStorage.getItem('userInfo')||'';
    try{
      return JSON.parse(userInfo);
    }catch (e){
      return {}
    }
  }
}
