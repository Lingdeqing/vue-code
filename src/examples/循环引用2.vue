<template>
    <ul>
       <li  v-for="node in children" :key="node.label"><node-comp :node="node"></node-comp></li>
    </ul>
</template>
<script>
 import NodeComp from './循环引用1.vue'
export default {
    name: 'children-comp',
    props: [
        'children'
    ],
    components: {
        NodeComp
    }

}
</script>

