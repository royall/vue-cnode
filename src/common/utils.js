export default {
  formatDate(str){
    let date=new Date(str);
    return date.toLocaleString();
  },
  logout(){
    localStorage.removeItem('accessToken');
  },
  getToken(){
    return localStorage.getItem('accessToken')||'';
  }
}
