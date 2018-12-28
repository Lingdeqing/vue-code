<template>
    <div>
        <label><input type="radio" v-model="cur" :value="c1"/>Component1</label>
        <label><input type="radio" v-model="cur" :value="c2"/>Component2</label>
        <keep-alive :max="3">
            <component :is="cur"></component>
        </keep-alive>
    </div>
</template>

<script>

import Component1 from './动态组件1.vue'
import Component2 from './动态组件2.vue'

export default {
    data(){
        return {
            cur: Component1,
            c1: Component1,
            c2: Component2
        }
    },
    components: {
        Component1,
        Component2
    }
}
</script>

