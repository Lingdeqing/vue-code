<template>
  <div id="app">
    <h2>无响应</h2>
    <p>值: {{ a.msg }}</p>
    <input ref="a" @input="a.msg = $refs.a.value" />
    <h2>响应</h2>
    <p>值: {{ b.msg }}</p>
    <input ref="b" @input="b.msg = $event.target.value" />
    <h2>无响应</h2>
    <p>值: {{ c && c.msg }}</p>
    <input ref="c" @input="c.msg = $refs.c.value" />
    <h2>响应</h2>
    <p>值: {{ d && d.msg }}</p>
    <input ref="d" @input="d.msg = $refs.d.value" />
    <span v-for="n in 10" :key="n">{{n}}</span>
    <p>无响应的会在响应的更新dom时触发更新</p>
    <p>无论是data函数中，还是其他函数中，第一次赋值data属性，未指定的子属性无法产生响应特性。</p>
  </div>
</template>
<script>
export default {
  mounted(){
    this.c = {};    // 初始不指定子属性
    this.$set(this.c, 'msg', '');
    // this.c.msg = '';
    this.d = {    // 初始指定子属性
      msg: ''
    }
  },
  data: function() {
    return {
      a: {},  // 初始不赋值
      b: {
        msg: '' // 初始赋值
      },
      c: null,
      d: null
    };
  },
  created(){
      window.vm = this;
  }
}
</script>