import Vue from 'vue';

Vue.filter('toLocale', function (str) {
  if (!str) {
    return ''
  }
  let date = new Date(str);
  return [[date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-'), [date.getHours(), date.getMinutes(), date.getSeconds()].join(':')].join(' ');
});
