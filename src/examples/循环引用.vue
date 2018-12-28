<template>
    <node-comp :node="node"></node-comp>
</template>
<script>
 import NodeComp from './循环引用1.vue'

export default {
    name: 'tree-comp',
    data(){
        return {
            node: {
                label: '节点1',
                children: [
                    {
                        label: '节点1-1'
                    },
                    {
                        label: '节点1-2'
                    },
                    {
                        label: '节点1-3'
                    }
                ]
            }
        }
    },
    components: {
        NodeComp
    }
}
</script>

