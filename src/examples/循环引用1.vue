<template>
    <div>
        <h2>{{node.label}}</h2>
        <children-comp v-if="node.children" :children="node.children"></children-comp>
    </div>
</template>
<script>
export default {
    name: 'node-comp',
    props: [
        'node'
    ],
    components: {
        ChildrenComp: () => import('./循环引用2.vue')
    }
}
</script>

