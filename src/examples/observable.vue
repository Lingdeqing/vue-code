<template>
  <div>
    <p>
      {{ globalState.count }}
      <button @click="globalState.count++">add 1</button>
    </p>
    <p>
      Vue.observable可以使用来观察全局的状态，原来放在vuex中的可以放在Vue.observable中
    </p>
  </div>
</template>

<script>
import Vue from "vue";
const globalState = Vue.observable({
  count: 1
});
export default {
  data: function() {
    return {
      globalState
    };
  }
};
</script>