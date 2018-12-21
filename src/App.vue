<template>
  <div id="app">
    <HelloWorld v-model="msg"/>
    <button @click="fn2">外面修改外面</button>
    <TestSlot a="1"><template slot-scope="{message}">{{message}}</template></TestSlot>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TestSlot from './components/slot.vue'

export default {
  name: 'app',
  data: function(){
    return {
      msg: 'hehe'
    }
  },
  methods: {
    fn2(){
      this.msg = this.msg + 1;
    }
  },
  components: {
    HelloWorld,
    TestSlot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
