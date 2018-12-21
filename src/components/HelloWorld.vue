<template>
  <div class="hello">
    <h1>{{ value }}</h1>
    <button @click="fn2">里面改变外面</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    value: { // 必须要使用value
      default: '',
    }
  },
  methods: {
    fn2(){
      this.$emit('input', this.value + 2);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
