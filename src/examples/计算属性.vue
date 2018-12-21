
<template>
  <div id="app">
    <p>Original message: "{{ message }}"</p>
    <p>计算属性 reversed message: "{{ reversedMessage }}"</p>
    <p>计算属性 reversed message: "{{ reversedMessage }}"</p>
    <p>方法修改 reversed message: "{{reversedMessage2()}}"</p>
    <p>方法修改 reversed message: "{{reversedMessage2()}}"</p>
    <input v-model="another" />
    <input v-model="message" placeholder="我会触发计算"/>
    <p>组件初始化时，调用computed获取计算属性初始值时，vue采集了每个计算属性的输入属性，然后进行观察了，只有相关的属性修改了，才会触发相关的更新</p>
    <p>计算属性，在依赖属性不变时，其多次访问只会调用一次</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function(){
    return {
      message: 'hehe',
      message2: 'haha',
      another: '',
    }
  },
  methods: {
      reversedMessage2(){
        console.log('触发模板调用');
        var a = this.message;
        return '999'
      }
  },
  computed: {
    reversedMessage: function () {
      console.log('触发计算');
      var a = this.message2;
      return '666'
    }
  },
  created(){
    window.vm = this;
  },
  updated(){
    console.log('更新dom')
  }
}
</script>

