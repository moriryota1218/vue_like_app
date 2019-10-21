(function() {
 'use strict';
// Components(部品の再利用)

var likeComponent = Vue.extend({
  // componentのdataは関数で返す
  data: function() {
    return {
      count: 0
    }
  },
  template: '<button @click="countUp">Like {{ count }}</button>',
  methods: {
    countUp: function() {
      this.count++;
    }
  }
});
 var app = new Vue({
  el: '#app',
  components: {
    'like-component': likeComponent
  }
 });
})();