export default {
  formatDate(str){
    if(!str){return ''}
    let date=new Date(str);
    return date.toLocaleString();
  },
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
