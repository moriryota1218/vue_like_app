(function() {
 'use strict';
// Components(部品の再利用)

var likeComponent = Vue.extend({
  template: '<button>Like</button>'
});
 var app = new Vue({
  el: '#app',
  components: {
    'like-component': likeComponent
  }
 });
})();