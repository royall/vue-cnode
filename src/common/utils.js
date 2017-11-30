export default {
  formatDate(str){
    if(!str){return ''}
    let date=new Date(str);
    return date.toLocaleString();
  },
  logout(){
    localStorage.removeItem('accessToken');
    window.location.reload();
  },
  getToken(){
    return localStorage.getItem('accessToken')||'';
  }
}
