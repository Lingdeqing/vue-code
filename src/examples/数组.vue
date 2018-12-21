
<template>
  <div id="app">
    <ul>
      <li v-for="(item, i) in items" :key="i">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function(){
    return {
      items: ['a', 'b', 'c'] 
    }
  },
  created(){
    window.vm = this;
  }
}
</script>

