(function() {
 'use strict';
// Components(部品の再利用)

var likeComponent = Vue.extend({
  // カスタム属性を受け取るにはpropsを使う
  // props: ['message'],
  // propsにデフォルト値や型を指定する場合
  props: {
    message: {
      type: String,
      default: 'Like'
    }
  },
  // componentのdataは関数で返す
  data: function() {
    return {
      count: 0
    }
  },
  template: '<button @click="countUp">{{ message }} {{ count }}</button>',
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